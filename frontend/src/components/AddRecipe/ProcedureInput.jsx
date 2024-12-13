import { useState } from 'react';

const ProcedureInput = () => {
  const [steps, setSteps] = useState([]);
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

  return (
    <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
      <label className="text-lg font-heading font-semibold mb-2">Procedure</label>
      <ol className="list-decimal pl-5">
        {steps.map((step, index) => (
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
              <span onClick={() => handleEditStep(index)} className="cursor-pointer">
                {step}
              </span>
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
        className="rounded-md outline outline-1 outline-gray-400 px-4 py-1 mt-2"
      />
    </div>
  );
};

export default ProcedureInput;