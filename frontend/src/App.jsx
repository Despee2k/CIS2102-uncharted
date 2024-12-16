import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PendingRequests from './pages/PendingRequests';
import PendingDetails from './pages/PostDetails';
import SearchResults from './components/SearchResults';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/recipepage/:id" element={<RecipePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/addrecipe" element={<AddRecipePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/editprofile" element={<EditProfilePage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/pendingrequests" element={<PendingRequests />} />
        <Route path="/post-details/:recipeId" element={<PendingDetails />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
};

export default App;