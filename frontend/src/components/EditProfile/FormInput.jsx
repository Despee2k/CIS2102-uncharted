const FormInput = ({ label, name, value, onChange, type = "text" }) => {
    return (
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-2">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded px-4 py-2 focus:ring-accent focus:border-accent outline-none"
        />
      </div>
    );
  };
  
  export default FormInput;
  