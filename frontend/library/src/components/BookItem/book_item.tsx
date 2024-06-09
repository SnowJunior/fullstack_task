import { BookModel } from "../../models";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const BookItem = ({ book }: { book: BookModel }) => {
  return (
    <Card
      sx={{ maxWidth: 345, backgroundColor: "white", borderRadius: "20px" }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="/image2.webp"
        title="jambo junior"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          by {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Assign</Button>
      </CardActions>
    </Card>
  );
};

export default BookItem;
