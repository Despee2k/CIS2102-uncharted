const FormTextarea = ({ label, name, value, onChange }) => {
    return (
      <div className="flex flex-col col-span-2">
        <label className="text-gray-700 font-medium mb-2">{label}</label>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className="border border-gray-300 rounded px-4 py-2 focus:ring-accent focus:border-accent outline-none resize-none"
        />
      </div>
    );
  };
  
  export default FormTextarea;
  