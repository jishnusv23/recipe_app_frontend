import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import ImgMediaCard from "../ui/Card";
import { Recipe } from "../../types/TrendingRecipeTypes";
import { Player } from "@lottiefiles/react-lottie-player";

const TodayTrending = () => {
  const [trendingRecipes, setTrendingRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://api.spoonacular.com/recipes/random",
          {
            params: {
              apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
              number: 4,
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
        {trendingRecipes.length > 0 ? (
          trendingRecipes.map((recipe) => (
            <ImgMediaCard
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              productId={recipe.id}
            />
          ))
        ) : (
          <div className="fixed inset-0 flex items-center justify-center ">
            <div className="flex flex-col items-center pr-28">
              <Player
                src="https://lottie.host/49854fcb-fda4-4060-af2a-09946f10e20c/oLXWEycFO9.json"
                background="transparent"
                speed={1}
                loop
                autoplay
                className="w-80 mb-4"
              />
              <h1 className="font-black text-4xl">Api is Not Getting</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodayTrending;
