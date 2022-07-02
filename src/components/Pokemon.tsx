import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useAtomValue } from "jotai";
import { filteredPokemonAtom } from "../atoms";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

const Pokemon = () => {
  const pokemon = useAtomValue(filteredPokemonAtom);
  return (
    <Box>
      <SearchBar />
      <Grid container spacing={2}>
        {pokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </Grid>
    </Box>
  );
};

export default Pokemon;
