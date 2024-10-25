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
    return <div>{error}</div>;
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
      <div className="pt-20">
        <button className="pl-10 text-4xl" onClick={() => navigate(-1)}>
          <IoCaretBackCircle />
        </button>
        <div className="flex justify-center">
          <h1 className="font-black text-3xl">Details of the Product</h1>
        </div>
        <div className="flex justify-center">
          <img src={productDetails.image} alt="" width={300} height={300} />
          <div className="ml-5">
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
