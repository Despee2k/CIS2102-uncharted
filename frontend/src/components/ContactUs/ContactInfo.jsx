import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="space-y-10 text-center lg:text-left">
            <p className="ml-8">
                Have a question, suggestion, or collaboration idea? At Uncharted Creative, we are always excited to connect with fellow explorers of culinary creativity. Whether you’re looking for recipe tips, want to share your cooking story, or have feedback for us, we’d love to hear from you!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5">
                <div className="flex flex-col items-center">
                    <FaPhone className="text-3xl mb-2" />
                    <h2 className="font-semibold">Phone Number</h2>
                    <span>+123 456 7890</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaEnvelope className="text-3xl mb-2" />
                    <h2 className="font-semibold">Email Address</h2>
                    <span>hello@unchartedcreative.com</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaFacebook className="text-3xl mb-2" />
                    <h2 className="font-semibold">Social Media</h2>
                    <span>Uncharted Creatives</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaMapMarkerAlt className="text-3xl mb-2" />
                    <h2 className="font-semibold">Our Office</h2>
                    <span>123 Culinary Street, Flavortown, </span>
                    <span>FT 56789</span>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;