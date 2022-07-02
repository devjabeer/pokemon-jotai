import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { pokemonAtom } from "../atoms";
import { IPokemon } from "../types/pokemon";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

const URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

const Pokemon = () => {
  const [pokemon, setPokemon] = useAtom(pokemonAtom);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchPokemon = async () => {
      const data = (await axios
        .get(URL, { signal })
        .then((res) => res.data)) as IPokemon[];
      setPokemon(data);
    };
    fetchPokemon();
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
