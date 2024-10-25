import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../common/Header";
import { IoCaretBackCircle } from "react-icons/io5";

const Details = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
            },
          }
        );
        console.log("🚀 ~ fetchProductDetails ~ response:", response);
        setProductDetails(response.data);
      } catch (error: any) {
        console.error("Error fetching product details:", error);
        setError("Could not fetch product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center font-black text-2xl">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center font-black text-2xl">{error}</div>
    );
  }

  if (!productDetails) {
    return (
      <div className="flex justify-center font-black text-2xl">
        No product details available.
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <button className="pl-10 text-4xl" onClick={() => navigate(-1)}>
          <IoCaretBackCircle />
        </button>
        <div className="flex justify-center mt-5">
          <h1 className="font-black text-3xl">Details of the Product</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-5">
          <img
            src={productDetails.image}
            alt={productDetails.title}
            className="w-full max-w-xs rounded-lg shadow-lg"
          />
          <div className="ml-0 md:ml-5 mt-5 md:mt-0 text-left">
            <p>
              <strong>Aggregate Likes:</strong> {productDetails.aggregateLikes}
            </p>
            <p>
              <strong>Cooking Time:</strong> {productDetails.cookingMinutes}{" "}
              minutes
            </p>
            <p>
              <strong>Preparation Time:</strong>{" "}
              {productDetails.preparationMinutes} minutes
            </p>
            <p>
              <strong>Servings:</strong> {productDetails.servings}
            </p>
            <p>
              <strong>Health Score:</strong> {productDetails.healthScore}
            </p>
            <p>
              <strong>Source:</strong>{" "}
              <a
                href={productDetails.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {productDetails.sourceName}
              </a>
            </p>
            <p>
              <strong>Summary:</strong>{" "}
              <span
                dangerouslySetInnerHTML={{ __html: productDetails.summary }}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
