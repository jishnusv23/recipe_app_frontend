import { useEffect, useState } from "react";
import AllRecipie from "../spoonacular/AllRecipie";
import Header from "../common/Header";
import { CiSearch } from "react-icons/ci";
import Pagination from "../ui/Pagination";
const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debounceQuery, setDebounceQuery] = useState<string>(searchQuery);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceQuery(searchQuery);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchQuery]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Header />
      <div className="pt-20">
        <div className="flex justify-center items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 w-64 h-10  rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 "
            placeholder="Search and find your favorite"
          />
          <button className="">
            <CiSearch className="text-xl" />
          </button>
        </div>
        <div>
          <AllRecipie
            searchQuery={debounceQuery}
            currentPage={currentPage}
            setToalPage={setTotalPages}
          />
        </div>
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default AllProducts;
