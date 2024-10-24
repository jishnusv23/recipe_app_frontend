import axios from "axios";
import React, { useEffect, useState } from "react";
import ImgMediaCard from "../ui/Card";
import { Player } from "@lottiefiles/react-lottie-player";

interface AllRecipieProps {
  searchQuery: string;
  currentPage: number;
  setToalPage: (page: number) => void;
}
const AllRecipie: React.FC<AllRecipieProps> = ({
  currentPage,
  searchQuery,
  setToalPage,
}) => {
  const [totalRecipies, setTotalRecipies] = useState<any[]>([]);
  const resultsPerPage = 12;
  useEffect(() => {
    const fetchAllRecipie = async () => {
      try {
        const offset = (currentPage - 1) * resultsPerPage;
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch`,
          {
            params: {
              apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
              query: searchQuery,
              number: 12,
              offset: offset,
            },
          }
        );
        // console.log(
        //   "🚀 ~ file: AllRecipie.tsx:13 ~ fetchAllRecipie ~ response:",
        //   response
        // );
        setTotalRecipies(response.data.results);
        setToalPage(Math.ceil(response.data.totalResults / resultsPerPage));
      } catch (error: any) {
        console.error("Something wrong in allproduct", error);
      }
    };
    fetchAllRecipie();
  }, [searchQuery, currentPage, setToalPage]);
  return (
    <div>
      <div>{/* <h1>All Product Showing here </h1> */}</div>
      <div className="grid grid-cols-2 gap-4  pt-4 md:grid-cols-1 lg:grid-cols-4">
        {totalRecipies.length > 0 ? (
          totalRecipies.map((recipe) => (
            <ImgMediaCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              productId={recipe.id}
            />
          ))
        ) : (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <Player
                src="https://lottie.host/4e2fb4b6-1136-4e34-8386-664838d675e2/jOnHGsa3uB.json"
                background="transparent"
                speed={1}
                loop
                autoplay
                className="w-80 mb-4" // Margin bottom for spacing
              />
              <h1 className="font-black text-4xl">
                Appi is Not Getting Explore Another Website
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRecipie;
