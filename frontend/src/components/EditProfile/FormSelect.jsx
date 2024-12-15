const FormSelect = ({ label, name, options, value, onChange }) => {
    return (
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-2">{label}</label>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="border border-gray-300 rounded px-4 py-2 focus:ring-accent focus:border-accent outline-none"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default FormSelect;
  