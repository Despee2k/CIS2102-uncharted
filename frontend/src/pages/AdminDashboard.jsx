import { MdDashboard } from "react-icons/md";
import { FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";

import Sidebar from "../components/Admin/Sidebar";

const pendingData = [
  { id: 20, user: "Alniño Past", requestDate: "2024-07-07", deadline: "2024-07-12", status: "Pending" },
  { id: 19, user: "Ron Ramas", requestDate: "2024-07-04", deadline: "2024-07-08", status: "Pending" },
  { id: 18, user: "Vin Sagarino", requestDate: "2024-07-02", deadline: "2024-07-11", status: "Pending" },
  { id: 17, user: "Niko Pazo", requestDate: "2024-07-01", deadline: "2024-07-12", status: "Pending" },
  { id: 16, user: "John Doe", requestDate: "2024-07-01", deadline: "2024-07-11", status: "Pending" },
];

const AdminDashboard = () => {


  return (
    <div className="flex bg-[#F6F6F9] min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header Section */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <MdDashboard className="mr-2" /> Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p>
                Hey, <strong>Alniño Past</strong>
              </p>
              <p>Admin</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </header>

        {/* Analytics Cards */}
        <section>
          <h2 className="text-xl font-bold mb-4">Analytics</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-sm transition">
              <FiCheckCircle className="text-green-500 text-3xl mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Accepted</p>
                <h2 className="text-2xl font-bold">2,657</h2>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-sm transition">
              <FiClock className="text-yellow-500 text-3xl mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <h2 className="text-2xl font-bold">20</h2>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-sm transition">
              <FiXCircle className="text-red-500 text-3xl mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Rejected</p>
                <h2 className="text-2xl font-bold">594</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Pending Requests */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Recent Pendings</h2>
          <div className="w-full overflow-x-auto rounded-3xl bg-white px-5 pb-5 pt-3 shadow-[0_2rem_3rem_rgba(132,139,200,0.18)] duration-300 hover:shadow-none">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-center font-semibold">Pending ID</th>
                  <th className="px-6 py-3 text-center font-semibold">User</th>
                  <th className="px-6 py-3 text-center font-semibold">Request Date</th>
                  <th className="px-6 py-3 text-center font-semibold">Requested Deadline</th>
                  <th className="px-6 py-3 text-center font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 text-center">
                      <a className="text-accent underline" href={`/post-details/${item.id}`}>
                        {item.id}
                      </a>
                    </td>
                    <td className="px-6 py-3 text-center">{item.user}</td>
                    <td className="px-6 py-3 text-center">{item.requestDate}</td>
                    <td className="px-6 py-3 text-center">{item.deadline}</td>
                    <td className="px-6 py-3 text-center text-yellow-500">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <a
              href="/pendingrequests"
              className="text-accent-500 underline hover:text-accent text-sm "
            >
              Show All
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;

