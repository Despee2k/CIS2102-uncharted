import propTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-300 h-2 rounded">
      <div
        className="bg-accent h-2 rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: propTypes.number.isRequired,
};

export default ProgressBar;