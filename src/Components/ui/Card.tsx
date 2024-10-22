import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import toast from "react-hot-toast";

interface ImgMediaCardProps {
  title: string;
  image: string;
  //   description: string;
}

const ImgMediaCard: React.FC<ImgMediaCardProps> = ({
  title,
  image,
  //   description,
}) => {
  const handleResponse = () => {
    console.log("first");
   toast("Explore new recipes!", {
     icon: "🍻",
   });
  };
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
        <Button size="small"> More</Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;
