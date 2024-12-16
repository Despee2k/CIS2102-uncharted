import { useState } from 'react';
import axios from 'axios';
import { MdOutlineStar, MdOutlineStarOutline } from 'react-icons/md';

const RecipeInfo = ({ recipe, onRatingUpdate }) => {
    console.log(recipe);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [isRating, setIsRating] = useState(false);
    
    const totalStars = 5;
    const currentRating = recipe.rating || 0;

    const handleStarClick = async (starRating) => {
        try {
            setIsRating(true);
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `http://localhost:8088/api/recipes/${recipe.id}/rate`,
                { rating: starRating },
                { 
                    headers: { 
                        'Authorization': token 
                    } 
                }
            );

            // Update rating in parent component
            onRatingUpdate(response.data.newRating);
            setIsRating(false);
        } catch (error) {
            console.error('Rating error:', error.response?.data?.message || 'Failed to rate');
            setIsRating(false);
            alert(error.response?.data?.message || 'Failed to rate recipe');
        }
    };

    // Format date to a more readable format
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="ml-20">
            <h1 className="mt-10 mb-4 font-heading text-2xl font-bold">{recipe.title}</h1>
            
            {/* Recipe Image */}
            <img 
                className="w-[800px] h-[400px] object-cover rounded-lg" 
                src={recipe.image} 
                alt={recipe.title} 
            />
            
            {/* Rating Section */}
            <div className="grid grid-flow-col auto-cols-max my-4 text-lg items-center">
                {/* Interactive Star Rating */}
                {[...Array(totalStars)].map((_, index) => {
                    const starRating = index + 1;
                    return (
                        <span 
                            key={index} 
                            onMouseEnter={() => setHoveredRating(starRating)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => handleStarClick(starRating)}
                            style={{ cursor: 'pointer', opacity: isRating ? 0.5 : 1 }}
                        >
                            {starRating <= (hoveredRating || currentRating) ? 
                                <MdOutlineStar color="black" size={25}/> : 
                                <MdOutlineStarOutline color="black" size={25}/>
                            }
                        </span>
                    );
                })}
                
                {/* Rating Display */}
                <h2 className="mx-5 font-heading text-4xl font-bold">
                    {currentRating.toFixed(1)}
                </h2>
                
                {/* Recipe Description */}
                <div className="w-[580px]">
                    <p>{recipe.description}</p>
                </div>
            </div>
            
            {/* Recipe Details Grid */}
            <div className="grid grid-cols-2 text-lg gap-4">
                <div className="flex items-center">
                    <h2 className="mr-2 font-bold">Author:</h2>
                    <h2>{recipe.authorName || 'Unknown'}</h2>
                </div>
                
                <div className="flex items-center">
                    <h2 className="mr-2 font-bold">Date Posted:</h2>
                    <h2>{recipe.datePosted ? formatDate(recipe.datePosted) : 'N/A'}</h2> {/* Use datePosted */}
                </div>

                <div className="flex items-center">
                    <h2 className="mr-2 font-bold">Ready In:</h2>
                    <h2>{recipe.readyIn || 'N/A'} minutes</h2> {/* Ensure `prepTime` fallback */}
                </div>

                
                <div className="flex items-center">
                    <h2 className="mr-2 font-bold">Servings:</h2>
                    <h2>{recipe.servings}</h2>
                </div>
                
                <div className="flex items-center">
                    <h2 className="mr-2 font-bold">Category:</h2>
                    <h2>{recipe.category}</h2>
                </div>
                
                <div className="flex items-center">
                    <h2 className="mr-2 font-bold">Total Ratings:</h2>
                    <h2>{recipe.totalRatings}</h2>
                </div>
            </div>
        </div>
    )
}

export default RecipeInfo;