import React from "react";
import "./Pagination.css";
import Link from "next/link";


const Pagination = ({ page, setPage, perPage, allPages }) => {
  const totalPages = allPages; // Change this to the total number of pages in your data
  const maxPageNumbers = perPage || 5; // Maximum number of page numbers to display

  // Function to handle page number click
  const handlePageClick = (page) => {
    setPage(page);
  };

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Function to get a subset of page numbers to display
  const getPageNumbersSubset = () => {
    if (totalPages <= maxPageNumbers) {
      return pageNumbers;
    } else {
      const halfMax = Math.floor(maxPageNumbers / 2);
      let startPage = page - halfMax;
      if (startPage < 1) {
        startPage = 1;
      }
      let endPage = startPage + maxPageNumbers - 1;
      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxPageNumbers + 1;
      }
      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    }
  };

  return (
    <div className="flex justify-center my-4">
      {+allPages > 0 && (
        <ul className="pagination flex gap-4">
          
          <li className={`page-item ${page === 1 ? "disabled" : ""} border-2 rounded-md px-2`}>
            <Link
              href="#"
              className="page-link"
              onClick={() => handlePageClick(page - 1)}
            >
              Previous
            </Link>
          </li>

          {page > maxPageNumbers / 2 && totalPages > maxPageNumbers && (
            <li className="page-item disabled">
              <Link href="#" className="page-link">
                ...
              </Link>
            </li>
          )}

          {getPageNumbersSubset().map((pag) => (
            <li
              key={pag}
              className={`page-item ${page === pag ? "active" : ""}`}
            >
              <Link
                href="#"
                className="page-link"

                onClick={() => handlePageClick(pag)}
              >
                {pag}
              </Link>
            </li>
          ))}

          {totalPages - page >= maxPageNumbers / 2 &&
            totalPages > maxPageNumbers && (
              <li className="page-item disabled">
                <Link href="#" className="page-link">
                  ...
                </Link>
              </li>
            )}

          <li className={`page-item ${page === totalPages ? "disabled" : ""} border-2 rounded-md px-2`}>
            <Link
              href="#"
              className="page-link"
              onClick={() => handlePageClick(page + 1)}
            >
              Next
            </Link>
          </li>

        </ul>
      )}
    </div>
  );
};

export default Pagination;
