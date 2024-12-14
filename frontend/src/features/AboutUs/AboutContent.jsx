
import CarbonaraImage from "../../assets/Carbonara.png";


const AboutContent = () => (
  <section className="py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
    <img
      src={CarbonaraImage}
      alt="Delicious Dish"
      className="w-full lg:w-1/2 rounded-lg shadow-lg"
    />
    <div className="text-center lg:text-right">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Charting New Culinary Adventures
      </h2>
      <hr className="border-t-2 border-accent mb-4" />
      <p className="text-gray-600 leading-relaxed mb-6">
        At Uncharted Creatives, we believe that every dish tells a story. Our
        passion is exploring the world of flavors, sharing recipes, and creating
        unforgettable culinary experiences. Whether you are a seasoned chef or
        just starting your food journey, our website is your guide to discovering
        new tastes and techniques from around the globe.
      </p>
    </div>
  </section>
);

export default AboutContent;