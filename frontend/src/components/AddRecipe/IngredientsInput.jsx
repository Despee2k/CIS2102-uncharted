import { useState } from 'react';

const IngredientsInput = () => {
  const [ingredients, setIngredients] = useState([]);
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

  return (
    <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
      <label className="text-lg font-heading font-semibold mb-2">Ingredients</label>
      <ul className="list-disc pl-5">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="mb-2">
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
              <span onClick={() => handleEditIngredient(index)} className="cursor-pointer">
                {ingredient}
              </span>
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
        className="rounded-md outline outline-1 outline-gray-400 px-4 py-1 mt-2"
      />
    </div>
  );
};

export default IngredientsInput;