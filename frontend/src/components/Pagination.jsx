import propTypes from "prop-types";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`text-gray-500 hover:text-gray-700 ${
          currentPage === 1 ? "pointer-events-none opacity-50" : ""
        }`}
      >
        &lt; Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 border rounded-md transition-colors ${
              currentPage === page
                ? "bg-[#A2674A] text-white border-[#A2674A] font-semibold"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`text-gray-500 hover:text-gray-700 ${
          currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  totalPages: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  setCurrentPage: propTypes.func.isRequired,
};