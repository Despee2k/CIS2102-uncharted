import { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [pendingData, setPendingData] = useState([]);
  const [analytics, setAnalytics] = useState({
    accepted: 0,
    pending: 0,
    rejected: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check user role from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "ADMIN") {
      navigate("/login"); // Redirect to login if not an admin
    } else {
      setUser(storedUser);
    }

    // Fetch pending requests and analytics data
    const fetchDashboardData = async () => {
      try {
        // Replace with actual backend API endpoints
        const response = await fetch("/api/dashboard");
        const data = await response.json();

        // Assuming data has the following shape:
        // { pendingRequests: Array, accepted: Number, pending: Number, rejected: Number }
        setPendingData(data.pendingRequests);
        setAnalytics({
          accepted: data.accepted,
          pending: data.pending,
          rejected: data.rejected,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  if (!user) return null; // Ensure the user is loaded before rendering the UI

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
                Hey, <strong>{user.name}</strong>
              </p>
              <strong>Admin</strong>
            </div>
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
                <h2 className="text-2xl font-bold">{analytics.accepted}</h2>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-sm transition">
              <FiClock className="text-yellow-500 text-3xl mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <h2 className="text-2xl font-bold">{analytics.pending}</h2>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-sm transition">
              <FiXCircle className="text-red-500 text-3xl mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Rejected</p>
                <h2 className="text-2xl font-bold">{analytics.rejected}</h2>
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
            <a href="/pendingrequests" className="text-accent-500 underline hover:text-accent text-sm">
              Show All
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;