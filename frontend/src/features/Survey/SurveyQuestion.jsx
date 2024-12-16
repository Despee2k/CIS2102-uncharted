const SurveyQuestion = ({ options, selectedOptions, toggleOption }) => {
  return (
    <div className="flex flex-wrap justify-center items-center w-full max-w-[600px] mx-auto gap-x-8 gap-y-6 mt-12">
      {options.map((option) => (
        <button
          key={option}
          className={`w-[160px] h-[60px] flex items-center justify-center border rounded-lg text-lg font-medium shadow-md ${
            selectedOptions.includes(option)
              ? 'bg-accent text-white'
              : 'bg-white text-black'
          }`}
          onClick={() => toggleOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SurveyQuestion;
