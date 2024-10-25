import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useAppDispatch } from "../../hooks/hooks";
import { AddWishlistAction } from "../../redux/actions/user/AddWishlist";
import { useNavigate } from "react-router-dom";

interface ImgMediaCardProps {
  title: string;
  image: string;
  productId: string;
  //   description: string;
}

const ImgMediaCard: React.FC<ImgMediaCardProps> = ({
  title,
  image,
  productId,
  //   description,
}) => {
  const { data } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const navigate=useNavigate()
  const handleResponse = async () => {
    if (data) {
      console.log("first");
      console.log(productId, "-----------------------------");
      const response=await dispatch(
        AddWishlistAction({
          userId: data.id as string,
          productId: productId as string,
        })
      );
      console.log("🚀 ~ file: Card.tsx:40 ~ handleResponse ~ resons:", response)
      if(response.payload.message){
        toast.success(response.payload.message)
      }
    } else {
      toast("Explore new recipes! After Login", {
        icon: "🍻",
      });
    }
  };
  const handleDetailsPage=()=>{
    navigate(`/productDetail/${productId}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          className="hover:bg-red-600"
          onClick={handleResponse}
        >
          <FavoriteBorderIcon />
        </Button>
        <Button size="small" onClick={handleDetailsPage}> Details</Button>
        <Button size="small"> More</Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
