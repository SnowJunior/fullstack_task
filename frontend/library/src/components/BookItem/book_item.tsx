import { BookModel } from "../../models";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./book_item.scss";
import { AssignButton, RemoveButton } from "../shared/button";

const BookItem = ({ book }: { book: BookModel }) => {
  return (
    <div className="card_wrapper">
      <Card
        sx={{
          maxWidth: 400,
          height: 320,
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <CardMedia
          sx={{ height: 200, width: '100%' }}
          image={book.coverPhotoURL}
          title={book.title}
        />
        <div className="card_details">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <Typography gutterBottom variant="body2" component="div">
                by {book.author}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                color={"#FABD33"}
                fontSize={"16px"}
              >
                Level {book.readingLevel}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <div className="action_buttons">
              <AssignButton
                sx={{ width: "100%", padding: "10px", fontSize: "14px" }}
                onClick={book.addBook}
              >
                Assign
              </AssignButton>
              {book.isAllBooks ? (
                ""
              ) : (
                <RemoveButton
                  sx={{ width: "100%", padding: "10px", fontSize: "14px" }}
                  onClick={book.removeBook}
                >
                  Remove
                </RemoveButton>
              )}
            </div>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default BookItem;
