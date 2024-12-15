const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50 text-gray-500 hover:text-gray-700" // Steal styles from static page
      >
        Prev
      </button>
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={`px-3 py-1 border rounded ${
            currentPage === number ? 'bg-[#A2674A] text-white border-[#A2674A] font-semibold' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
          }`} // Use original styles for functionality
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50 text-gray-500 hover:text-gray-700" // Steal styles from static page
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;