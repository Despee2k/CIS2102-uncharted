import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
// import RecipePage from './pages/RecipePage';
// import AddRecipePage from './pages/AddRecipePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/recipepage" element={<RecipePage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        {/* <Route path="/addrecipepage" element={<AddRecipePage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;