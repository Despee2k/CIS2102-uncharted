const Offerings = () => (
    <section className="py-12 px-6 lg:px-16 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">What We Offer?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Unique Recipes</h3>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Step-by-Step Guides</h3>
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Culinary Inspiration</h3>
        </div>
      </div>
    </section>
  );
  
  export default Offerings;