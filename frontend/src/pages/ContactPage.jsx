

import ContactUsSection from "../features/ContactUsSection";
import Navbar from "../components/Navbar";
import JoinUsCTA from "../components/ContactUs/JoinUsCTA";
import Footer from "../components/Footer";
import Steak from "../assets/Steak.png";


const ContactPage = () => {
    return (
        <main>
            <Navbar />
            {/* Hero image or banner */}
            <div
                className="relative h-64 md:h-80 bg-cover bg-center"
                style={{ backgroundImage: `url(${Steak})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
                </div>
            </div>

            {/* Contact Us Section */}
            <ContactUsSection />
            <JoinUsCTA />
            <Footer />
        </main>
    );
};

export default ContactPage;