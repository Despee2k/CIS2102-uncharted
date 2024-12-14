import PropTypes from 'prop-types';

const SurveyQuestion = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full max-w-[600px] mx-auto gap-x-8 gap-y-6 mt-12">
      {options.map((option) => (
        <button
          key={option}
          className={`w-[160px] h-[60px] flex items-center justify-center border rounded-lg text-lg font-medium shadow-md ${
            selectedOption === option
              ? 'bg-accent text-white'
              : 'bg-white text-black'
          }`}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SurveyQuestion;



SurveyQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string,
  setSelectedOption: PropTypes.func.isRequired,
};

