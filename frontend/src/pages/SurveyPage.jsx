import { useState } from 'react';
import Header from '../features/LoginPage/Header';
import ProgressBar from '../components/ProgressBar';
import SurveyQuestion from '../features/Survey/SurveyQuestion';

const SurveyPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({
    allergies: null,
    dietaryPreferences: null,
    foodAvoidances: null,
  });

  const surveyQuestions = [
    {
      question: 'Do you have any food allergies?',
      options: [
        'Peanuts',
        'Dairy',
        'Shellfish',
        'Soy',
        'Eggs',
        'Tree Nuts',
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
      options: ['Red Meat', 'Processed Food', 'Sugary Foods', 'High-Fat', 'None'],
      key: 'foodAvoidances',
    },
  ];

  const totalQuestions = surveyQuestions.length;

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerSelection = (key, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: answer,
    }));
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <Header title="Survey" />

      {/* Main Content */}
      <div className="max-w-4xl w-full mx-auto p-4">
        {/* Progress Bar */}
        <div className="relative mt-10 mb-4">
          <ProgressBar
            progress={Math.round(
              ((currentQuestion + 1) / totalQuestions) * 100
            )}
          />
          <div className="absolute w-full top-4 text-center text-lg font-semibold text-gray-600 mb-6">
            Question {currentQuestion + 1} / {totalQuestions}
          </div>
        </div>

        {/* Question with Additional Margin */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold">
            {surveyQuestions[currentQuestion].question}
          </h2>
        </div>

        {/* Options Section */}
        <div className="flex justify-center">
          <SurveyQuestion
            options={surveyQuestions[currentQuestion].options}
            selectedOption={userAnswers[surveyQuestions[currentQuestion].key]}
            setSelectedOption={(answer) =>
              handleAnswerSelection(
                surveyQuestions[currentQuestion].key,
                answer
              )
            }
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-8">
          {currentQuestion > 0 && (
            <button
              className="px-6 py-2 bg-gray-300 text-black rounded mr-2"
              onClick={handlePreviousQuestion}
            >
              Back
            </button>
          )}
          <button
            className="px-6 py-2 bg-accent text-white rounded"
            onClick={handleNextQuestion}
            disabled={currentQuestion === totalQuestions - 1}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
