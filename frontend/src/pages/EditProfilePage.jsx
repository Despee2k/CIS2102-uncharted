import { useState} from "react";
import EditProfileForm from "../features/EditProfile/EditProfileForm";
import ModalUnsavedChanges from "../features/EditProfile/UnsavedChangesModal";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom'; // Correct import

const EditProfilePage = () => {
  const [formData, setFormData] = useState({
    profilePicture: "", // Add profile picture state
    username: "Alniño Pastoriza",
    email: "alniño@example.com",
    firstName: "Alniño",
    lastName: "Pastoriza",
    bio: "A great chef is an artist that I truly respect.",
    gender: "Male",
    password: "********",
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setUnsavedChanges(true);
  };

  const handleSave = () => {
    alert("Profile saved!");
    console.log("Saved Data:", formData);
    // Add backend API logic here
    setUnsavedChanges(false);
  };

  const handleCancel = () => {
    console.log("HandleCancel called, unsavedChanges:", unsavedChanges);
    if (unsavedChanges) {
      setShowModal(true);
      console.log("showModal set to true");
    } else {
      navigate("/profile");
    }
  };

  const handleModalCancel = () => {
    setShowModal(false); // Close modal without discarding
  };

  const handleModalConfirm = () => {
    setShowModal(false); // Close modal and navigate
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
          show={showModal} // Pass the modal visibility
          onCancel={handleModalCancel} // Pass cancel function
          onConfirm={handleModalConfirm} // Pass confirm function
        />
      )}
      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2024 Uncharted Creatives. All rights reserved.
      </footer>
    </div>
  );
};

export default EditProfilePage;
