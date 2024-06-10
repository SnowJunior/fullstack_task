import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const SearchQuery = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
        label="Search"
        type="search"
        sx={{ color: "white", width: "400px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        value={searchValue}
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchQuery;
