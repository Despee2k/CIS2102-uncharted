import PropTypes from 'prop-types';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const FormInput = ({ type, name, placeholder, value, onChange, icon }) => {
  const IconComponent = () => {
    switch (icon) {
      case 'email':
        return <FaEnvelope className="text-gray-400" />;
      case 'password':
        return <FaLock className="text-gray-400" />;
      case 'person':
        return <FaUser className="text-gray-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-2 text-gray-700">
        {placeholder}
      </label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
        <IconComponent />
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="ml-2 w-full border-none focus:outline-none text-gray-700"
          required
        />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.oneOf(['email', 'password', 'person']),
};

export default FormInput;
