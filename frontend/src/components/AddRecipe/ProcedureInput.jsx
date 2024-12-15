import { useState } from 'react';

const ProcedureInput = ({ steps, setSteps }) => {
  const [currentStep, setCurrentStep] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddStep = (e) => {
    if (e.key === 'Enter' && currentStep.trim()) {
      setSteps([...steps, currentStep.trim()]);
      setCurrentStep("");
      e.preventDefault();
    }
  };

  const handleEditStep = (index) => {
    setEditingIndex(index);
    setEditText(steps[index]);
  };

  const handleSaveEdit = (e, index) => {
    if (e.key === 'Enter' || e.type === 'blur') {
      const updatedSteps = [...steps];
      updatedSteps[index] = editText.trim();
      setSteps(updatedSteps);
      setEditingIndex(null);
    }
  };

  const handleDeleteStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  return (
    <div>
      <ol className="list-decimal pl-5">
        {steps.map((step, index) => (
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
                onClick={() => handleEditStep(index)} 
                className="cursor-pointer flex-grow"
              >
                {step}
              </span>
            )}
            {editingIndex !== index && (
              <button 
                type="button"
                onClick={() => handleDeleteStep(index)}
                className="ml-2 text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </li>
        ))}
      </ol>
      <input
        type="text"
        value={currentStep}
        onChange={(e) => setCurrentStep(e.target.value)}
        onKeyDown={handleAddStep}
        placeholder="Step..."
        className="w-full rounded-md outline outline-1 outline-gray-400 px-4 py-1 mt-2"
      />
    </div>
  );
};

export default ProcedureInput;