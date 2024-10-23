
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="flex items-center justify-center space-x-2 p-2 ">
      <button
        className=""
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {/* {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`btn ${
            currentPage === index + 1 ? "text-gray-600" : "text-gray-400"
          }`}
          onClick={() => onPageChange(index + 1)}
          
        >
          {index + 1}
        </button>
      ))} */}
      <button
        className="text-gray-800"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
