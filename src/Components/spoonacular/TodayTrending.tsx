import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ImgMediaCard from "../ui/Card";
import { Recipe } from "../../types/TrendingRecipeTypes";

const TodayTrending = () => {
  const [trendingRecipes, setTrendingRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random",
          {
            params: {
              apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
              number: 8,
            },
          }
        );
        console.log("Response:", response);
        setTrendingRecipes(response.data.recipes);
      } catch (error: any) {
        console.error("Something went wrong implementing the API", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <div className="flex justify-center  mb-4">
        <h1 className="font-bold text-3xl">
          <span className="flex items-center">
            {" "}
            Trending Today
            <FaArrowRight className="text-red-400" />
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-4">
        {trendingRecipes.map((recipe) => (
          <ImgMediaCard
            key={recipe?.id}
            title={recipe?.title}
            image={recipe?.image}
            
          />
        ))}
      </div>
    </div>
  );
};

export default TodayTrending;
