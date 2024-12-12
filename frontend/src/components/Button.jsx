import PropTypes from 'prop-types';

const Button = ({ label, onClick, type }) => {
    return (
      <button
        type={type || 'button'}
        onClick={onClick}
        className="w-full bg-[#B17457] text-white py-2 rounded hover:bg-opacity-90 transition duration-300"
      >
        {label}
      </button>
    );
  };
    

  Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
  };
  export default Button;
  