import { Box } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import BookLibrary from "./books_library";

const Dashboard = () => {
  return (
    <>
      <Box height={"100vh"} display={'flex'} flexDirection={'column'} gap={'3rem'} my={'2rem'}>
        <Navbar />
        <BookLibrary />
      </Box>
    </>
  );
};

export default Dashboard;
