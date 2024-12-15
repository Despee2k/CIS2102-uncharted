
import FormInput from "../components/EditProfile/FormInput";
import FormTextarea from "../components/EditProfile/FormTextArea";
import FormSelect from "../components/EditProfile/FormSelect";
import { useState } from "react";

const EditProfileForm = ({ formData, onChange, onSave, onCancel }) => {
  const [previewImage, setPreviewImage] = useState(formData.profilePicture || "");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
        onChange({ target: { name: "profilePicture", value: reader.result } }); // Pass base64 to the form
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Profile</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Picture Upload */}
        <div className="col-span-2 flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-4">Profile Picture</label>
          <div className="relative w-24 h-24 mb-4">
            <img
              src={previewImage || "/default-profile.png"} // Default profile image
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleImageChange}
            />
          </div>
          <p className="text-sm text-gray-500">Click to upload a new profile picture.</p>
        </div>

        {/* Other Fields */}
        <FormInput
          label="Username"
          name="username"
          value={formData.username}
          onChange={onChange}
        />
        <FormInput
          label="Email"
          name="email"
          value={formData.email}
          onChange={onChange}
          type="email"
        />
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
        />
        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
        />
        <FormTextarea
          label="Bio"
          name="bio"
          value={formData.bio}
          onChange={onChange}
        />
        <FormSelect
          label="Gender"
          name="gender"
          options={["Male", "Female", "Other"]}
          value={formData.gender}
          onChange={onChange}
        />
        <FormInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={onChange}
          type="password"
        />
      </form>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfileForm;