import Sidebar from "../components/Admin/Sidebar";
import Pagination from "../components/Pagination";
import { FiClock, FiSearch } from "react-icons/fi";
import { useState } from "react";

const PendingRequests = () => {
  const pendingRequests = [
    { id: 47, user: "Ken Drake", requestDate: "2024-07-07", deadline: "2024-07-17", status: "Pending" },
    { id: 48, user: "Diesel Vinegar", requestDate: "2024-07-07", deadline: "2024-07-17", status: "Pending" },
    { id: 49, user: "King K.", requestDate: "2024-07-06", deadline: "2024-07-12", status: "Pending" },
    { id: 50, user: "Lorem I.", requestDate: "2024-07-06", deadline: "2024-07-12", status: "Pending" },
    { id: 51, user: "Ipsum L.", requestDate: "2024-07-05", deadline: "2024-07-06", status: "Pending" },
    { id: 52, user: "Lee Chao...", requestDate: "2024-07-04", deadline: "2024-07-07", status: "Pending" },
    { id: 53, user: "Row Pat R...", requestDate: "2024-07-04", deadline: "2024-07-07", status: "Pending" },
    { id: 54, user: "Trash Vin", requestDate: "2024-07-04", deadline: "2024-07-07", status: "Pending" },
    { id: 55, user: "Emen Ems", requestDate: "2024-07-02", deadline: "2024-07-17", status: "Pending" },
    { id: 56, user: "Godzilla Th...", requestDate: "2024-07-02", deadline: "2024-07-21", status: "Pending" },
    { id: 57, user: "Kurt Zandy", requestDate: "2024-07-01", deadline: "2024-07-14", status: "Pending" },
    { id: 58, user: "Go Go Andr...", requestDate: "2024-07-01", deadline: "2024-07-14", status: "Pending" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(pendingRequests.length / itemsPerPage);

  const currentData = pendingRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <FiClock className="mr-2" /> Pending Requests
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

        {/* Search Bar */}
        <div className="mb-6 flex items-center rounded-3xl bg-white px-5 py-3 shadow-md mx-10">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="ml-3 flex-1 border-none focus:outline-none text-gray-700"
          />
        </div>

        {/* Table */}
        <div className="px-10">
          <div className="w-full overflow-x-auto rounded-3xl bg-white px-5 pb-5 pt-3 shadow-md">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="px-6 py-3 text-center font-semibold">Pending ID</th>
                  <th className="px-6 py-3 text-center font-semibold">User</th>
                  <th className="px-6 py-3 text-center font-semibold">Request Date</th>
                  <th className="px-6 py-3 text-center font-semibold">Requested Deadline</th>
                  <th className="px-6 py-3 text-center font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((request) => (
                  <tr key={request.id} className="border-b border-gray-200">
                    <td className="px-6 py-3 text-center">
                      <a className="text-accent underline" href={`/post-details/${request.id}`}>
                        {request.id}
                      </a>
                    </td>
                    <td className="px-6 py-3 text-center">{request.user}</td>
                    <td className="px-6 py-3 text-center">{request.requestDate}</td>
                    <td className="px-6 py-3 text-center">{request.deadline}</td>
                    <td className="px-6 py-3 text-center text-yellow-500">{request.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-end">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PendingRequests;

