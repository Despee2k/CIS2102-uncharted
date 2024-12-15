import { useState } from 'react';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import CategoryFilter from '../components/CategoryFilter';
import RecipeCard from '../components/Recipe/RecipeCard'


const recipesData = [
  {
    id: 1,
    category: 'Breakfast',
    title: 'Beef Tapa',
    image: '../assets/Carbonara.png',
    description:
      'A savory Filipino dish of marinated, pan-fried beef, commonly served with garlic rice and egg.',
    rating: 4.5,
  },
  {
    id: 2,
    category: 'Breakfast',
    title: 'Bangsilog',
    image: 'https://i.pinimg.com/736x/33/c4/3e/33c43e6663752e91cdb25c449506420a.jpg',
    description:
      'A Filipino breakfast dish featuring crispy fried bangus, garlic fried rice, and a fried egg.',
    rating: 4.2,
  },
  {
    id: 3,
    category: 'Breakfast',
    title: 'Tinapang Galunggong',
    image: '../assets/Tinapang-Galunggong.png',
    description:
      'Smoked mackerel fish served with garlic fried rice and tomatoes.',
    rating: 4.1,
  },
  {
    id: 4,
    category: 'Breakfast',
    title: 'Tortang Talong',
    image: '../assets/Tortang-Talong.png',
    description:
      'A Filipino-style omelette made with grilled eggplant, tomatoes, and onions.',
    rating: 4.7,
  },
  {
    id: 5,
    category: 'Breakfast',
    title: 'Balut',
    image: '../assets/Balut.png',
    description:
      'A popular Filipino street food that is a developing duck embryo boiled and eaten from the shell.',
    rating: 4.6,
  },
  {
    id: 6,
    category: 'Breakfast',
    title: 'Kwek Kwek',
    image: '../assets/Kwek-Kwek.png',
    description:
      'A Filipino street food made with quail eggs coated with a mixture of flour, water, and food coloring, then deep-fried.',
    rating: 4.4,
  },
  {
    id: 7,
    category: 'Breakfast',
    title: 'Tokwa',
    image: '../assets/Tokwa.png',
    description:
      'A Filipino dish made with extra firm tofu, served with a vinegar-garlic sauce and steamed rice.',
    rating: 4.3,
  },
  {
    id: 8,
    category: 'Breakfast',
    title: 'Sinangag',
    image: '../assets/Sinangag.png',
    description:
      'A Filipino-style fried rice dish made with garlic, onions, and tomatoes.',
    rating: 4.5,
  },
  {
    id: 9,
    category: 'Breakfast',
    title: 'Arroz Caldo',
    image: '../assets/Arroz-Caldo.png',
    description:
      'A Filipino-style chicken and rice porridge flavored with ginger, onions, and garlic.',
    rating: 4.8,
  },
  {
    id: 10,
    category: 'Breakfast',
    title: 'Taho',
    image: '../assets/Taho.png',
    description:
      'A popular Filipino breakfast food made with silken tofu, sago (tapioca pearls), and sweet syrup.',
    rating: 4.4,
  },
  {
    id: 11,
    category: 'Breakfast',
    title: 'Puto Bumbong',
    image: '../assets/Puto-Bumbong.png',
    description:
      'A type of Filipino rice cake typically served during breakfast, colored with ube halaya (purple yam jam) and topped with coconut strips.',
    rating: 4.6,
  },
  {
    id: 12,
    category: 'Breakfast',
    title: 'Kapeng Barako',
    image: '../assets/Kapeng-Barako.png',
    description:
      'A type of Filipino coffee made with Liberica coffee beans, known for its strong and pungent flavor.',
    rating: 4.5,
  },
  {
    id: 13,
    category: 'Breakfast',
    title: 'Pancit Bihon',
    image: '../assets/Pancit-Bihon.png',
    description:
      'A Filipino noodle dish made with rice flour noodles, vegetables, and sometimes meat or seafood.',
    rating: 4.7,
  },
  {
    id: 14,
    category: 'Breakfast',
    title: 'Champorado',
    image: '../assets/Champorado.png',
    description:
      'A Filipino hot chocolate drink made with tablea (cacao tablets), milk, and sugar, often served with rice or bread.',
    rating: 4.6,
  },
  {
    id: 15,
    category: 'Breakfast',
    title: 'Maja Blanca',
    image: '../assets/Maja-Blanca.png',
    description:
      'A Filipino coconut pudding dessert made with coconut milk, sugar, and cornstarch.',
    rating: 4.5,
  },
  {
    id: 16,
    category: 'Lunch',
    title: 'Chicken Adobo',
    image: '/path/to/chicken-adobo.jpg',
    description:
      'A classic Filipino dish made by simmering chicken in soy sauce, vinegar, and spices.',
    rating: 4.8,
  },
  {
    id: 17,
    category: 'Dinner',
    title: 'Pork Sinigang',
    image: '/path/to/pork-sinigang.jpg',
    description:
      'A sour soup made with pork, tamarind broth, and vegetables, perfect for dinner.',
    rating: 4.6,
  },
];

const MenuPage = () => {
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Others'];
  const [activeCategory, setActiveCategory] = useState('Breakfast');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredRecipes = recipesData.filter(
    (recipe) => recipe.category === activeCategory
  );

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentRecipes = filteredRecipes.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
        {/* Pass the necessary props to Pagination */}
          <div className="flex justify-end mt-4">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
      <footer className="text-center py-4 text-sm text-gray-500">
        2024 Uncharted Creatives. All rights reserved.
      </footer>
    </div>
  );
};

export default MenuPage;

