const ContactForm = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">Get In Touch</h3>
            <form>
                <label className="block mb-2">
                    Name
                    <input
                        type="text"
                        placeholder="Your Name..."
                        className="w-full p-2 mt-1 rounded-md border"
                    />
                </label>
                <label className="block mb-2">
                    Email
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full p-2 mt-1 rounded-md border"
                    />
                </label>
                <label className="block mb-2">
                    Subject
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full p-2 mt-1 rounded-md border"
                    />
                </label>
                <label className="block mb-4">
                    Message
                    <textarea
                        placeholder="Type here..."
                        className="w-full p-2 mt-1 rounded-md border"
                        rows="4"
                    ></textarea>
                </label>
                <button type="submit" className="w-full bg-accent text-white py-2 rounded-md font-semibold">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;