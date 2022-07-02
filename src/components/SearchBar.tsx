import { Box, TextField } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { searchAtom } from "../atoms";

const SearchBar = () => {
  const [search, setSearch] = useAtom(searchAtom);
  console.log("search rerendered");
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Search Pokemon"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
