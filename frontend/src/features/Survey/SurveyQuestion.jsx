import PropTypes from 'prop-types';

const SurveyQuestion = ({ question, options, selectedOption, setSelectedOption }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="flex flex-wrap gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded border ${
              selectedOption === option
                ? 'bg-accent text-white'
                : 'bg-gray-200 text-black'
            }`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
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