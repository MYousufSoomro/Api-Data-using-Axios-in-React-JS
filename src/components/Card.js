import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "./Rating";
import Chip from "@mui/material/Chip";

export default function MediaCard({
  image,
  title,
  description,
  rating,
  reviewsCount,
  onClickAddCart,
  category,
  price,
}) {
  return (
    <Card
      style={{ minWidth: 275, display: "inline-block" }}
      sx={{ maxWidth: 345 }}
    >
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ m: 1 }}>
          <Chip label={category} color="primary" />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Rating rating={rating} reviewsCount={reviewsCount} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={onClickAddCart}>
          Buy for ${price}
        </Button>
      </CardActions>
    </Card>
  );
}
