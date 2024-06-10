import { Box } from "@mui/material";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./navbar.scss";
// import { deepOrange } from "@mui/material/colors";
// import useColorMode from "../../hooks/useTheme";

const Navbar = () => {
  // const { toggleColorMode, mode } = useColorMode();
  return (
    <>
      <Box
        height={"100px"}
        width={"95%"}
        mx={"auto"}
        display={"flex"}
        flex-direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <img
          src="https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93"
          alt=""
          className="navbar_image"
        />
        {/* <Switch
          icon={
            mode === "dark" ? (
              <LightModeIcon sx={{ color: deepOrange }} />
            ) : (
              <DarkModeIcon sx={{ color: deepOrange }} />
            )
          }
          onChange={toggleColorMode}
        /> */}
      </Box>
    </>
  );
};

export default Navbar;
