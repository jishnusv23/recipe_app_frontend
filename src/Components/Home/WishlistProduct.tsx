import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { GetWishlistAction } from "../../redux/actions/user/GetWishlistAction";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import axios from "axios";
import ImgMediaCard from "../ui/Card";
import { Player } from "@lottiefiles/react-lottie-player";

const WishlistProduct = () => {
  const { data } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const [prodcts, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetwishlist = async () => {
      console.log("first");
      const resonse = await dispatch(GetWishlistAction(data?.id as string));
      console.log(
        "🚀 ~ file: WishlistProduct.tsx:14 ~ fetwishlist ~ resonse:",
        resonse
      );
      if (resonse.payload.data) {
        const { productIds } = resonse.payload.data;
        console.log(
          "🚀 ~ file: WishlistProduct.tsx:22 ~ fetwishlist ~ productIds:",
          productIds
        );
        const fetchProducts = await Promise.all(
          productIds.map(async (id: string) => {
            try {
              const res = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch`,
                {
                  params: {
                    apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY,
                    id: id,
                    number: 10,
                  },
                }
              );
              console.log(
                "🚀 ~ file: WishlistProduct.tsx:40 ~ productIds.map ~ res:",
                res.data.results
              );
              const allProducts = res.data.results;
              const matchedProducts = allProducts.filter((product: any) =>
                productIds.includes(product.id.toString())
              );
              console.log(
                "🚀 ~ file: WishlistProduct.tsx:45 ~ productIds.map ~ matchedProducts:",
                matchedProducts
              );

              setProducts(matchedProducts);
            } catch (error) {
              console.error(`Error fetching product ${id}:`, error);
            }
          })
        );

        console.log(
          "🚀 ~ file: WishlistProduct.tsx:23 ~ fetchProducts ~ fetchProducts:",
          fetchProducts
        );
      }
    };
    fetwishlist();
  }, []);
  return (
    <>
      <div>
        <div className="grid grid-cols-2 gap-4  pt-4 md:grid-cols-1 lg:grid-cols-4">
          {prodcts.length > 0 ? (
            prodcts.map((recipe) => (
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
                  src="https://lottie.host/0414e5fe-2061-44ab-8486-2af489193748/3IxnVBmPZa.json"
                  background="transparent"
                  speed={1}
                  loop
                  autoplay
                  className="w-80"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistProduct;
