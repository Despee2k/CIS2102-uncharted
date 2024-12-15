import { useState } from 'react';

const IngredientsInput = ({ ingredients, setIngredients }) => {
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddIngredient = (e) => {
    if (e.key === 'Enter' && currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient("");
      e.preventDefault();
    }
  };

  const handleEditIngredient = (index) => {
    setEditingIndex(index);
    setEditText(ingredients[index]);
  };

  const handleSaveEdit = (e, index) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = editText.trim();
      setIngredients(updatedIngredients);
      setEditingIndex(null);
    }
  };

  const handleDeleteIngredient = (index) => {
    const updatedIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updatedIngredients);
  };

  return (
    <div>
      <ul className="list-disc pl-5">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="mb-2 flex items-center justify-between">
            {editingIndex === index ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => handleSaveEdit(e, index)}
                onBlur={(e) => handleSaveEdit(e, index)}
                className="w-full px-2 py-1 rounded-md outline outline-1 outline-gray-400"
                autoFocus
              />
            ) : (
              <span 
                onClick={() => handleEditIngredient(index)} 
                className="cursor-pointer flex-grow"
              >
                {ingredient}
              </span>
            )}
            {editingIndex !== index && (
              <button 
                type="button"
                onClick={() => handleDeleteIngredient(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={currentIngredient}
        onChange={(e) => setCurrentIngredient(e.target.value)}
        onKeyDown={handleAddIngredient}
        placeholder="Ingredient..."
        className="w-full rounded-md outline outline-1 outline-gray-400 px-4 py-1 mt-2"
      />
    </div>
  );
};

export default IngredientsInput;