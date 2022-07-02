import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SearchBar from "./SearchBar";

const Pokemon = () => {
  return (
    <Box>
      <SearchBar />
      <Grid container></Grid>
    </Box>
  );
};

export default Pokemon;
