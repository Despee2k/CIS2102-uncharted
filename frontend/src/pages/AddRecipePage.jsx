import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import InputWithLabel from "../components/AddRecipe/InputWithLabel"
import IngredientsInput from "../components/AddRecipe/IngredientsInput"
import ProcedureInput from "../components/AddRecipe/ProcedureInput"

const AddRecipePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
            <h1 className="text-3xl font-bold font-heading mt-12 mb-6 ml-20">Add New Recipe</h1>
            <div className="white shadow-2xl w-[80vw] h-[700px] mx-auto rounded-3xl grid grid-cols-2">
                <div className="mt-10">
                    <InputWithLabel 
                        name="Name of the Food"
                        placeholder="Name..."
                        type="text"
                    />
                    <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
                        <label className="text-lg font-heading font-semibold mb-2">Description</label>
                        <input type="text"
                                placeholder="Description..."
                                className="rounded-md outline outline-1 outline-gray-400 px-4 py-1 h-[210px] align-text-top"
                        >
                        
                        </input>
                    </div>
                    <IngredientsInput />
                </div>
                <div className="mt-10">
                    <InputWithLabel 
                        name="Upload Photo"
                        placeholder="TEST..."
                        type="file"
                    />
                    {/* Make this a select */}
                    <InputWithLabel 
                        name="Recipe Category..."
                        placeholder="Name..."
                        type="text"
                    />
                    <InputWithLabel 
                        name="Preparation Time"
                        placeholder="Minutes..."
                        type="number"
                    />
                    <InputWithLabel 
                        name="Serving"
                        placeholder="Serving..."
                        type="number"
                    />
                    <ProcedureInput />
                </div>
            </div>
            <div className="flex gap-4 justify-end mt-6 mb-12 mr-40">
                <button className="px-6 py-1 bg-gray-300 rounded-2xl text-sm">Cancel</button>
                <button className="px-6 py-2 bg-[#B17457] text-white rounded-2xl text-sm">Submit</button>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default AddRecipePage