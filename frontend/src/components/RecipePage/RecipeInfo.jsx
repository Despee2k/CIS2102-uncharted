import { MdOutlineStar, MdOutlineStarHalf, MdOutlineStarOutline } from 'react-icons/md';

const RecipeInfo = ({ title, image, rating, description, author, datePosted, readyIn, serving }) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const totalStars = 5;
    
    return (
        <div className="ml-20">
            <h1 className="mt-10 mb-4 font-heading text-2xl font-bold">{title}</h1>
            <img className="w-[800px]" src={image} alt={title} />
            <div className="grid grid-flow-col auto-cols-max my-4 text-lg items-center">
                {[...Array(totalStars)].map((_, index) => {
                    if (index < filledStars) {
                        return <MdOutlineStar key={index} color="black" size={25}/>;
                    } else if (index === filledStars && hasHalfStar) {
                        return <MdOutlineStarHalf key={index} color="black" size={25}/>;
                    } else {
                    return <MdOutlineStarOutline key={index} color="black" size={25}/>;
                    }
                })}
                <h2 className="mx-5 font-heading text-4xl font-bold">{rating}</h2>
                <div className="w-[580px]">
                    <p>{description}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 text-lg">
                <div className="flex">
                    <h2 className="mr-2 font-bold">Author:</h2>
                    <h2>{author}</h2>
                </div>
                <div className="flex">
                    <h2 className="mr-2 font-bold">Date Posted:</h2>
                    <h2>{datePosted}</h2>
                </div>
                <div className="flex">
                    <h2 className="mr-2 font-bold">Ready In:</h2>
                    <h2>{readyIn}</h2>
                </div>
                <div className="flex">
                    <h2 className="mr-2 font-bold">Serving:</h2>
                    <h2>{serving}</h2>
                </div>
            </div>
        </div>
    )
}

export default RecipeInfo;