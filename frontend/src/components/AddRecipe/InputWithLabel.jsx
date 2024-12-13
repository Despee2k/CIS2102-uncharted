const InputWithLabel = ({ type, name, placeholder}) => {
    return (
      <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
          <label className="text-lg font-heading font-semibold mb-2">{name}</label>
          <input type={type}
                  placeholder={placeholder}
                  className="rounded-md outline outline-1 outline-gray-400 px-4 py-1"   
          >
          
          </input>
      </div>
  
    )
  }
  
export default InputWithLabel