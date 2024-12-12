import PropTypes from 'prop-types';
const FormInput = ({ type, name, placeholder, value, onChange }) => {
    return (
      <div className="mb-4">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
      </div>
    );
  };

  export default FormInput;

  FormInput.propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
    