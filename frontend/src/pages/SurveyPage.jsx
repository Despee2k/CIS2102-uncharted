import  { useState } from 'react';
import Header from '../features/LoginPage/Header';
import ProgressBar from '../components/ProgressBar';
import SurveyQuestion from '../features/Survey/SurveyQuestion';

const SurveyPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    allergies: null,
    dietaryPreferences: null,
    foodAvoidances: null,
  });

  const questions = [
    {
      question: 'Do you have any food allergies?',
      options: [
        'Peanuts',
        'Dairy',
        'Shellfish',
        'Soy',
        'Eggs',
        'Tree nuts',
        'None',
      ],
      key: 'allergies',
    },
    {
      question: 'Do you follow any specific dietary restrictions or preferences?',
      options: ['Vegan', 'Vegetarian', 'Low Carb', 'I like it all'],
      key: 'dietaryPreferences',
    },
    {
      question: 'Are there any foods you avoid for health or personal reasons?',
      options: [
        'Red Meat',
        'Processed Food',
        'Sugary Foods',
        'High-Fat',
        'None',
      ],
      key: 'foodAvoidances',
    },
  ];

  const totalSteps = questions.length;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerSelection = (key, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: answer,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <Header title="Survey" />
      <div className="max-w-2xl mx-auto p-4">
        <ProgressBar
          progress={Math.round(((currentStep + 1) / totalSteps) * 100)}
        />
        <div className="flex items-center justify-center mb-4">
          <span className="text-2xl font-semibold">
            {currentStep + 1} / {totalSteps}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full md:w-1/2 p-4">
            <SurveyQuestion
              question={questions[currentStep].question}
              options={questions[currentStep].options}
              selectedOption={answers[questions[currentStep].key]}
              setSelectedOption={(answer) =>
                handleAnswerSelection(questions[currentStep].key, answer)
              }
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded mr-2"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-accent text-white rounded"
            onClick={handleNext}
            disabled={currentStep === totalSteps - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
