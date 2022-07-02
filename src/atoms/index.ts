import axios from "axios";
import { atom } from "jotai";
import { IPokemon } from "../types/pokemon";

const URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

export const searchAtom = atom<string>("");

export const pokemonAtom = atom<IPokemon[]>([]);

// Directly invoking mount function on atom instead of useEffect. will be invoked when first time used in provider
// https://jotai.org/docs/api/core#on-mount
pokemonAtom.onMount = (setAtom) => {
  const controller = new AbortController();
  const { signal } = controller;
  const fetchPokemon = async () => {
    const data = (await axios
      .get(URL, { signal })
      .then((res) => res.data)) as IPokemon[];
    setAtom(data);
  };
  fetchPokemon();
  return () => {
    controller.abort();
  };
};
// filted array of pokemon
export const filteredPokemonAtom = atom<IPokemon[]>((get) =>
  get(pokemonAtom).filter((p) =>
    p.name.english
      .toLocaleLowerCase()
      .includes(get(searchAtom).toLocaleLowerCase())
  )
);
