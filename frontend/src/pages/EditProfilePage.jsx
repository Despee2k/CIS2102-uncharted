import { useState, useEffect } from "react";
import EditProfileForm from "../features/EditProfile/EditProfileForm";
import ModalUnsavedChanges from "../features/EditProfile/UnsavedChangesModal";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile, updateUserProfile } from "../services/userService";

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    name: "", // Changed from username to match backend
    email: "",
    bio: "",
  });

  const [originalData, setOriginalData] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await fetchUserProfile();
        const profileData = {
          name: userData.name,
          email: userData.email,
          bio: userData.bio || "",
        };
        
        setFormData(profileData);
        setOriginalData(profileData);
      } catch (error) {
        console.error("Failed to fetch user profile", error);
        navigate('/login'); // Redirect to login if fetch fails
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
    // Check if the current value is different from the original
    setUnsavedChanges(
      Object.keys(originalData).some(
        key => originalData[key] !== (name === key ? value : formData[key])
      )
    );
  };

  const handleSave = async () => {
    try {
      // Prepare data to match backend schema
      const updateData = {
        name: formData.name,
        email: formData.email,
        bio: formData.bio || null,
      };

      await updateUserProfile(updateData);
      alert("Profile updated successfully!");
      setUnsavedChanges(false);
      navigate("/profile");
    } catch (error) {
      console.error("Failed to update profile", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handleCancel = () => {
    if (unsavedChanges) {
      setShowModal(true);
    } else {
      navigate("/profile");
    }
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-8">
        <EditProfileForm
          formData={formData}
          onChange={handleChange}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </main>
      {showModal && (
        <ModalUnsavedChanges
          isOpen={showModal}
          onClose={handleModalCancel}
          onDiscard={handleModalConfirm}
        />
      )}
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2024 Uncharted Creatives. All rights reserved.
      </footer>
    </div>
  );
};

export default EditProfilePage;