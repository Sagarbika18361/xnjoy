import React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const Pagination = ({ page, setPage, perPage, allPages }) => {
  const totalPages = allPages;
  const maxPageNumbers = perPage || 3;

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const getPageNumbersSubset = () => {
    if (totalPages <= maxPageNumbers) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfMax = Math.floor(maxPageNumbers / 2);
    let startPage = Math.max(1, page - halfMax);
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  return (
    <nav className="flex items-center justify-center my-6 overflow-x-auto space-x-2 px-4 scrollbar-hide">
      {allPages > 0 && (
        <button
          onClick={() => handlePageClick(page - 1)}
          disabled={page === 1}
          className="px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Show MoreHorizontal on the left if required */}
      {page > Math.ceil(maxPageNumbers / 2) && totalPages > maxPageNumbers && (
        <>
          <button
            onClick={() => handlePageClick(1)}
            className="p-2 sm:px-3 sm:py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          >
            1
          </button>
          <span className="px-1 py-1 text-sm text-gray-50">
            .
          </span>
        </>
      )}

      {getPageNumbersSubset().map((pag) => (
        <button
          key={pag}
          onClick={() => handlePageClick(pag)}
          className={`p-2 sm:px-3 sm:py-2 text-sm font-medium border rounded-md 
            ${
              page === pag
                ? "bg-yellow-400 border-yellow-400 text-black"
                : "text-gray-600 bg-white border-gray-300 hover:bg-gray-100"
            }`}
        >
          {pag}
        </button>
      ))}

      {/* Show MoreHorizontal on the right if required */}
      {totalPages - page > Math.floor(maxPageNumbers / 2) &&
        totalPages > maxPageNumbers && (
          <>
            <span className="px-1 py-1 text-sm text-gray-50">
             .
            </span>
            <button
              onClick={() => handlePageClick(totalPages)}
              className="p-2 sm:px-3 sm:py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            >
              {totalPages}
            </button>
          </>
        )}

      {allPages > 0 && (
        <button
          onClick={() => handlePageClick(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </nav>
  );
};

export default Pagination;
