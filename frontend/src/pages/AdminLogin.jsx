
import Header from '../features/LoginPage/Header';
import AdminForm from '../features/AdminPage/AdminForm';
import '../styling/AuthPage.css';

const AdminLogin = () => {
    return (
        <>
          <Header title="Uncharted Creatives" />
          <div className="">
            <AdminForm/>
            <footer className="auth-footer">
              © 2024 Uncharted Creatives. All rights reserved.
            </footer>
          </div>
        </>
    );
};

export default AdminLogin;
