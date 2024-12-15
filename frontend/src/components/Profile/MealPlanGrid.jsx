
import { Link } from 'react-router-dom';

const MealPlanGrid = ({ mealPlan, recipes }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-accent text-white">
              <th className="px-6 py-3">Day</th>
              <th className="px-6 py-3">Breakfast</th>
              <th className="px-6 py-3">Lunch</th>
              <th className="px-6 py-3">Dinner</th>
            </tr>
          </thead>
          <tbody>
            {mealPlan.map((dayPlan) => (
              <tr key={dayPlan.id}>
                <td className="px-6 py-4">{dayPlan.day}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/recipe/${recipes[dayPlan.breakfast - 1].title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-accent hover:underline"
                  >
                    {recipes[dayPlan.breakfast - 1].title}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/recipe/${recipes[dayPlan.lunch - 1].title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-accent hover:underline"
                  >
                    {recipes[dayPlan.lunch - 1].title}
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/recipe/${recipes[dayPlan.dinner - 1].title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-accent hover:underline"
                  >
                    {recipes[dayPlan.dinner - 1].title}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  
  export default MealPlanGrid;