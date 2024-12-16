import { useState } from 'react';
import Header from '../features/LoginPage/Header';
import ProgressBar from '../components/ProgressBar';
import SurveyQuestion from '../features/Survey/SurveyQuestion';
import { useNavigate } from 'react-router-dom';

const SurveyPage = () => {
  const [userAnswers, setUserAnswers] = useState({
    allergies: [], // Initialize allergies as an empty array
  });

  const navigate = useNavigate();

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
      ],
      key: 'allergies',
    },
  ];

  const handleAnswerSelection = (key, answer) => {
    setUserAnswers((prevAnswers) => {
      const currentAnswers = prevAnswers[key] || [];
      if (currentAnswers.includes(answer)) {
        // Remove the option if already selected
        return {
          ...prevAnswers,
          [key]: currentAnswers.filter((item) => item !== answer),
        };
      } else {
        // Add the option if not already selected
        return {
          ...prevAnswers,
          [key]: [...currentAnswers, answer],
        };
      }
    });
  };
  console.log(userAnswers);

  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <Header title="Survey" />

      {/* Main Content */}
      <div className="max-w-4xl w-full mx-auto p-4">
        {/* Progress Bar */}
        <div className="relative mt-10 mb-4">
          <ProgressBar progress={100} />
          <div className="absolute w-full top-4 text-center text-lg font-semibold text-gray-600 mb-6">
            Question 1 / 1
          </div>
        </div>

        {/* Question with Additional Margin */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold">
            {surveyQuestions[0].question}
          </h2>
        </div>

        {/* Options Section */}
        <div className="flex justify-center">
          <SurveyQuestion
            options={surveyQuestions[0].options}
            selectedOptions={userAnswers[surveyQuestions[0].key] || []}
            toggleOption={(answer) =>
              handleAnswerSelection(surveyQuestions[0].key, answer)
            }
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-8">
          <button
            className="px-6 py-2 bg-accent text-white rounded"
            onClick={() => navigate('/')} // Navigate to homepage
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
