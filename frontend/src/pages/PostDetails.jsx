import { FiChevronLeft, FiClock } from "react-icons/fi";
import Sidebar from "../components/Admin/Sidebar";

const PendingDetails = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center">
            <FiClock className="mr-2" /> Pending Details
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p>
                Hey, <strong>Alniño Manwil Pastorizia</strong>
              </p>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </div>

        <div className="flex-grow px-10 pb-10">
          {/* Request ID */}
          <h1 className="text-2xl font-semibold text-accent mb-5">PD000000020</h1>

          {/* User Information and Requested Information */}
          <div className="flex flex-row justify-between gap-5 columns-2">
            {/* User Information Box */}
            <div className="flex w-1/2 flex-col">
              <h2 className="text-2xl font-bold">User Information</h2>
              <div className="h-full my-5 w-full px-7 pb-5 pt-3 rounded-3xl bg-white shadow-md duration-300 hover:shadow-none">
                <table className="w-full text-left">
                  <tbody>
                    <tr>
                      <th className="font-semibold py-2">User Name:</th>
                      <td className="px-4 py-2 font-normal font-semibold">Ken Drake</td>
                    </tr>
                    <tr>
                      <th className="font-semibold py-2">Email:</th>
                      <td className="px-4 py-2 font-normal font-semibold">ronpatrickramas7@gmail.com</td>
                    </tr>
                    <tr>
                      <th className="font-semibold py-2">Phone Number:</th>
                      <td className="px-4 py-2 font-normal font-semibold">09927822748</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Requested Information Box */}
            <div className="flex w-1/2 flex-col">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Requested Information</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => window.history.back()}
                >
                  <FiChevronLeft size={28} />
                </button>
              </div>
              <div className="h-full my-5 w-full px-7 pb-5 pt-3 rounded-3xl bg-white shadow-md duration-300 hover:shadow-none">
                <table className="w-full text-left">
                  <tbody>
                    <tr>
                      <th className="font-semibold py-2">Requested Date:</th>
                      <td className="px-4 py-2 font-normal font-semibold">2024-07-07</td>
                    </tr>
                    <tr>
                      <th className="font-semibold py-2">Requested Deadline:</th>
                      <td className="px-4 py-2 font-normal font-semibold">2024-07-14</td>
                    </tr>
                    <tr>
                      <th className="font-semibold py-2">Status:</th>
                      <td className="px-4 py-2 text-yellow-500 font-semibold">Pending</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-row justify-end pt-5 space-x-3">
                  <h1 className="font-semibold pb-2">Request Status:</h1>
                  <button className="py-2 px-8 text-sm font-semibold text-white bg-red-600 rounded-3xl duration-200 hover:bg-red-700">
                    Reject
                  </button>
                  <button className="py-2 px-8 text-sm font-semibold text-white bg-green-600 rounded-3xl duration-200 hover:bg-green-700">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Recipe Details</h2>
            <div className="mt-6 px-7 pb-5 pt-3 rounded-3xl bg-white shadow-lg hover:shadow-none duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column: Recipe Content */}
                <div>
                  <h3 className="text-2xl font-bold">Eggs Benedict</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="font-bold">Serving:</span> 2 People |{" "}
                    <span className="font-bold">Ready in:</span> 5 mins
                  </p>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold mb-2">Tags:</h4>
                    <span className="py-1 px-2 bg-accent rounded-lg text-white">Breakfast</span>
                  </div>
                  <h4 className="font-semibold mb-2 mt-4">Ingredients:</h4>
                  <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>4 large eggs (for poaching)</li>
                    <li>2 English muffins, split in half and toasted</li>
                    <li>4 slices of Canadian bacon or ham</li>
                    <li>1 tablespoon vinegar (for poaching water)</li>
                    <li>Butter (for toasting the muffins)</li>
                  </ul>
                  <h4 className="font-semibold mb-2">For the Hollandaise sauce:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>3 large egg yolks</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>1/2 cup unsalted butter, melted</li>
                    <li>Salt and pepper to taste</li>
                    <li>Dash of cayenne pepper (optional)</li>
                  </ul>
                </div>

                {/* Right Column: Procedure */}
                <div>
                  {/* Picture Section */}
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Photo</h4>
                    <button className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 duration-200">
                      View Picture
                    </button>
                    <span className="ml-2 text-gray-600">Eggs Benedict.jpg</span>
                  </div>
                  <h4 className="font-semibold mb-2 mt-10">Procedure:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-black">
                    <li>
                      <strong>Prepare the hollandaise sauce:</strong> Whisk egg
                      yolks and lemon juice. Add melted butter slowly and season.
                    </li>
                    <li>
                      <strong>Toast the muffins:</strong> Lightly butter and toast
                      English muffins.
                    </li>
                    <li>
                      <strong>Cook the bacon:</strong> Heat Canadian bacon slices
                      on a skillet.
                    </li>
                    <li>
                      <strong>Poach the eggs:</strong> Gently poach the eggs in
                      simmering water.
                    </li>
                    <li>
                      <strong>Assemble:</strong> Place bacon on the muffins, add
                      poached eggs, and top with hollandaise sauce.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingDetails;

