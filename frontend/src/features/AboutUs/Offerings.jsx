const Offerings = () => (
  <section className="py-12 px-2 text-center">
    <h2 className="text-2xl font-bold text-gray-800 mb-8">What We Offer?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3  place-items-center">
      <div className="bg-[#FAF7F0] shadow-md p-6 rounded-xl max-w-sm w-full">
        <h3 className="text-lg font-bold text-[#935A3E] mb-2">Unique Recipes</h3>
        <hr className="border-t-2 border-gray-400 w-1/2 mx-auto" />
      </div>
      <div className="bg-[#FAF7F0] shadow-md p-6 rounded-xl max-w-sm w-full">
        <h3 className="text-lg font-bold text-[#935A3E] mb-2">Step-by-Step Guides</h3>
        <hr className="border-t-2 border-gray-400 w-1/2 mx-auto" />
      </div>
      <div className="bg-[#FAF7F0] shadow-md p-6 rounded-xl max-w-sm w-full">
        <h3 className="text-lg font-bold text-[#935A3E] mb-2">Culinary Inspiration</h3>
        <hr className="border-t-2 border-gray-400 w-1/2 mx-auto" />
      </div>
    </div>
  </section>
);

export default Offerings;
