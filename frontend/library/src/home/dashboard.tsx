import { Box } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import BookItem from "../components/BookItem/book_item";

const Dashboard = () => {
  return (
    <>
      <Box height={"100vh"}>
        <Navbar />
        <BookItem book={{
          title: "",
          author: "",
          readingLevel: "",
          coverPhotoURL: ""
        }} />
      </Box>
    </>
  );
};

export default Dashboard;
