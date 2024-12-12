import ContactForm from "../components/ContactUs/ContactForm";
import ContactInfo from "../components/ContactUs/ContactInfo";

const ContactUsSection = () => {
    return (
        <section id="contact-us" className="py-12 px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <ContactForm />
                <ContactInfo />
            </div>
        </section>
    );
};

export default ContactUsSection;