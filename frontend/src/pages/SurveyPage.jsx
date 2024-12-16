import { useState } from 'react';
import Header from '../features/LoginPage/Header';
import ProgressBar from '../components/ProgressBar';
import SurveyQuestion from '../features/Survey/SurveyQuestion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to install axios

const SurveyPage = () => {
  const [userAnswers, setUserAnswers] = useState({
    allergies: [], // Initialize allergies as an empty array
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const handleCompleteSurvey = async () => {
    setLoading(true);
    setError(null);

    try {
      // Get the token from local storage
      const token = localStorage.getItem('token');

      // Send allergies to backend
      await axios.post('http://localhost:8088/api/auth/complete-survey', 
        { allergies: userAnswers.allergies },
        { 
          headers: { 
            'Authorization': token,
            'Content-Type': 'application/json'
          } 
        }
      );

      // Navigate to home page after successful survey submission
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to complete survey');
      console.error('Survey completion error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Header title="Survey" />

      <div className="max-w-4xl w-full mx-auto p-4">
        <div className="relative mt-10 mb-4">
          <ProgressBar progress={100} />
          <div className="absolute w-full top-4 text-center text-lg font-semibold text-gray-600 mb-6">
            Question 1 / 1
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold">
            {surveyQuestions[0].question}
          </h2>
        </div>

        <div className="flex justify-center">
          <SurveyQuestion
            options={surveyQuestions[0].options}
            selectedOptions={userAnswers[surveyQuestions[0].key] || []}
            toggleOption={(answer) =>
              handleAnswerSelection(surveyQuestions[0].key, answer)
            }
          />
        </div>

        {error && (
          <div className="text-red-500 text-center mt-4">
            {error}
          </div>
        )}

        <div className="flex justify-end mt-8">
          <button
            className="px-6 py-2 bg-accent text-white rounded"
            onClick={handleCompleteSurvey}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;