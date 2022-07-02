import { Box, TextField } from "@mui/material";
import { useSetAtom } from "jotai";
import { useState, useTransition } from "react";
import { searchAtom } from "../atoms";

const SearchBar = () => {
  const setSearch = useSetAtom(searchAtom);
  const [, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput(e.target.value);
    startTransition(() => setSearch(input));
  };
  return (
    <Box sx={{ my: 2 }}>
      <TextField
        id="outlined-basic"
        label="Search Pokemon"
        variant="outlined"
        value={input}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchBar;
