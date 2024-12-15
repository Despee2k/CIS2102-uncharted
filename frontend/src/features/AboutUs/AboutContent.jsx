import CarbonaraImage from "../../assets/Carbonara.png";

const AboutContent = () => (
  <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-24 max-w-screen-xl mx-auto">
    <img
      src={CarbonaraImage}
      alt="Delicious Dish"
      className="w-full lg:w-2/5 rounded-lg shadow-lg"
    />
    <div className="text-center lg:text-left lg:w-3/5">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">
        Charting New Culinary Adventures
      </h2>
      <hr className="border-t-2 border-accent mb-6 w-1/2 mx-auto lg:mx-0" />
      <p className="text-black-600 leading-relaxed mb-8">
        At <span className="font-semibold text-accent">Uncharted Creatives</span>, we believe that every dish tells a story. 
        Our passion is exploring the world of flavors, sharing recipes, and creating unforgettable 
        culinary experiences. Whether you are a seasoned chef or just starting your food journey, 
        our website is your guide to discovering new tastes and techniques from around the globe.
      </p>
    </div>
  </section>
);

export default AboutContent;