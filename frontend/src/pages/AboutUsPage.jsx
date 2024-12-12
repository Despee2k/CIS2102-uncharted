import Navbar  from "../components/Navbar";
import Footer from "../components/Footer";
import JoinUsCTA from "../components/JoinUsCTA";
import AboutContent from '../features/AboutUs/AboutContent';
import Offerings from "../features/AboutUs/Offerings";
import Pasta from "../assets/Pasta.png"

const AboutUsPage = () => {
    <main>
        <Navbar />

        <div
                className="relative h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${Pasta})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
                </div>
        </div>
        <AboutContent />
        <Offerings />

        <JoinUsCTA />
        <Footer />
    </main>
}

export default AboutUsPage;
