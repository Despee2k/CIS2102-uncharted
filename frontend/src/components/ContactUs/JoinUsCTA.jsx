const CTASection = () => {
    return (
      <section className="bg-[#FAF7F0] text-gray-800 text-center py-12 rounded-lg shadow-lg w-[800px] flex justify-center mx-auto my-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Join Us on a Flavorful Journey</h2>
          <p className="text-lg mb-6">
           Explore the uncharted territories of cuisine with us!
          </p>
          <a href="/signup" className="bg-accent text-white py-3 px-6 rounded-lg font-semibold shadow-md">
            Join Us
          </a>
        </div>
      </section>
    );
  };
  
  export default CTASection;