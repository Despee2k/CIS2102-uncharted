const MealPlanGrid = ({ mealPlan, recipes }) => {
  console.log("Meal Plan:", mealPlan);
  console.log("Recipes:", recipes);

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
          {mealPlan && mealPlan.length > 0 ? (
            mealPlan.map((dayPlan) => {
              return (
                <tr key={dayPlan.day}>
                  <td className="px-6 py-4">{dayPlan.day}</td>
                  <td className="px-6 py-4">
                    {dayPlan.breakfast ? (
                      <div className="text-accent hover:underline">
                        {dayPlan.breakfast.title}
                      </div>
                    ) : (
                      "No breakfast recipe"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {dayPlan.lunch ? (
                      <div className="text-accent hover:underline">
                        {dayPlan.lunch.title}
                      </div>
                    ) : (
                      "No lunch recipe"
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {dayPlan.dinner ? (
                      <div className="text-accent hover:underline">
                        {dayPlan.dinner.title}
                      </div>
                    ) : (
                      "No dinner recipe"
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center">
                No meal plan available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MealPlanGrid;
