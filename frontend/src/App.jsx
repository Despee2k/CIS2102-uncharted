import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignUpPage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import AddRecipePage from './pages/AddRecipePage';
import RecipePage from './pages/RecipePage';
import EditProfilePage from './pages/EditProfilePage';
import SurveyPage from './pages/SurveyPage';
import MenuPage from './pages/MenuPage';
import ProfilePage from './pages/ProfilePage';
import ArchivePage from './pages/ArchivePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipepage/:id" element={<RecipePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/addrecipe" element={<AddRecipePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </Router>
  );
};

export default App;