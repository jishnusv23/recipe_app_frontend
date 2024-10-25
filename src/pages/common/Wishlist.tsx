
import WishlistProduct from "../../Components/Home/WishlistProduct";
import Header from "../../Components/common/Header";

const Wishlist = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <WishlistProduct />
      </div>
    </>
  );
};

export default Wishlist;
