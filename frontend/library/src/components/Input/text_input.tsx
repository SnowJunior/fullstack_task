import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import { SearchQueryProps } from "../../models";

const SearchQuery: React.FC<SearchQueryProps> = ({ placeholder = "Search", onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchValue);
    }, 1000); // Debounce time (1 second)

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [searchValue, onSearch]);

  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
        label={placeholder}
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
