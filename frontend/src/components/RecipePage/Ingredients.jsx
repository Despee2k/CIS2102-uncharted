const Ingredients = ({ ingredients }) => {
    const displayIngredients = () => {
        return ingredients.map((ingredient) => (
            <li key="index">{ingredient}</li>
    ))}

    return (
        <div className="bg-[#D8D2C2] xl:w-[500px] xl:h-screen sticky top-0">
            <h1 className="font-heading font-bold text-center mt-20 mb-8 text-2xl">Ingredients:</h1>
            <div className="ml-8 text-lg font-semibold">
                {displayIngredients()}
            </div>
        </div>
    )
}

export default Ingredients;