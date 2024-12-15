const InputWithLabel = ({ 
  type, 
  name, 
  placeholder, 
  register, 
  registerName, 
  errors,
  required = false,
  valueAsNumber = false
}) => {
  const registerOptions = {
    required: required ? `${name} is required` : false
  };

  if (valueAsNumber) {
    registerOptions.valueAsNumber = true;
  }

  return (
    <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
      <label className="text-lg font-heading font-semibold mb-2">{name}</label>
      <input 
        type={type}
        placeholder={placeholder}
        {...register(registerName, registerOptions)}
        className="rounded-md outline outline-1 outline-gray-400 px-4 py-1"   
      />
      {errors && errors[registerName] && (
        <div className="text-red-500">{errors[registerName].message}</div>
      )}
    </div>
  );
};

export default InputWithLabel;
