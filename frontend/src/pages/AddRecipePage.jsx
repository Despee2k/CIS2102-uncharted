import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputWithLabel from '../components/AddRecipe/InputWithLabel';
import IngredientsInput from '../components/AddRecipe/IngredientsInput';
import ProcedureInput from '../components/AddRecipe/ProcedureInput';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddRecipePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [ingredients, setIngredients] = useState([]);
  const [procedure, setProcedure] = useState([]);

  const onSubmit = async (data) => {
    if (ingredients.length === 0 || procedure.length === 0) {
      toast.error('Please add at least one ingredient and one procedure step');
      return;
    }

    try {
      // Create FormData for multipart upload
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('prepTime', data.prepTime);
      formData.append('servings', data.servings);
      
      // Append ingredients and procedure as JSON strings
      formData.append('ingredients', JSON.stringify(ingredients));
      formData.append('procedure', JSON.stringify(procedure));

      // Append picture file if exists
      if (data.picture && data.picture[0]) {
        const file = data.picture[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

        if (!allowedTypes.includes(file.type)) {
          toast.error('Invalid file type. Please upload a JPEG, PNG, GIF, or WebP image.');
          return;
        }

        if (file.size > 5 * 1024 * 1024) {
          toast.error('File size exceeds 5MB limit.');
          return;
        }

        formData.append('picture', file);
      }

      // Get token from local storage
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('Please log in to add a recipe');
        return;
      }

      // Make POST request to backend using multipart/form-data
      const response = await axios.post(
        'http://localhost:8088/api/recipes/addrecipe',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': token,
          },
        }
      );

      // Handle response from backend
      toast.success('Recipe added successfully!');
      console.log(response.data);

      // Reset form
      reset();
      setIngredients([]);
      setProcedure([]);

    } catch (error) {
      console.error('Error adding recipe:', error);
      toast.error(
        error.response?.data?.message || 
        'Failed to add recipe. Please check your inputs and try again.'
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <h1 className="text-3xl font-bold font-heading mt-12 mb-6 ml-20">Add New Recipe</h1>
          <div className="white shadow-2xl w-[80vw] h-[700px] mx-auto rounded-3xl grid grid-cols-2">
            <div className="mt-10">
              <InputWithLabel 
                type="text"
                name="Name of the Food"
                placeholder="Name..."
                register={register}
                registerName="title"
                errors={errors}
                required
              />
              
              <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
                <label className="text-lg font-heading font-semibold mb-2">Description</label>
                <textarea
                  {...register('description', { required: 'Description is required' })}
                  placeholder="Description..."
                  className="rounded-md outline outline-1 outline-gray-400 px-4 py-1 h-[210px]"
                ></textarea>
                {errors.description && <div className="text-red-500">{errors.description.message}</div>}
              </div>

              <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
                <label className="text-lg font-heading font-semibold mb-2">Ingredients</label>
                <div className="rounded-md outline outline-1 outline-gray-400 px-4 py-1">
                  <IngredientsInput
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
                <label className="text-lg font-heading font-semibold mb-2">Upload Photo</label>
                <input
                  type="file"
                  {...register('picture', { required: 'Picture is required' })}
                  className="rounded-md outline outline-1 outline-gray-400 px-4 py-1"
                />
                {errors.picture && <div className="text-red-500">{errors.picture.message}</div>}
              </div>
              
              <InputWithLabel 
                type="text"
                name="Recipe Category"
                placeholder="Category..."
                register={register}
                registerName="category"
                errors={errors}
                required
              />
              
              <InputWithLabel 
                type="number"
                name="Preparation Time"
                placeholder="Minutes..."
                register={register}
                registerName="prepTime"
                errors={errors}
                required
                valueAsNumber
              />
              
              <InputWithLabel 
                type="number"
                name="Serving"
                placeholder="Serving..."
                register={register}
                registerName="servings"
                errors={errors}
                required
                valueAsNumber
              />

              <div className="bg-gray flex flex-col w-2/3 mx-auto mb-5">
                <label className="text-lg font-heading font-semibold mb-2">Procedure</label>
                <div className="rounded-md outline outline-1 outline-gray-400 px-4 py-1">
                  <ProcedureInput
                    steps={procedure}
                    setSteps={setProcedure}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end mt-6 mb-12 mr-40">
            <button type="submit" className="px-6 py-2 bg-[#B17457] text-white rounded-2xl text-sm">
              Submit
            </button>
          </div>
        </form>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default AddRecipePage;