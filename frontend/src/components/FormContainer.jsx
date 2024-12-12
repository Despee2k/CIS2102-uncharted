import PropTypes from 'prop-types';

const FormContainer = ({ title ,children }) => (
    <div className="flex justify-center pt-32">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      {children}
    </div>
  </div>
);

FormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
  
  export default FormContainer;
  