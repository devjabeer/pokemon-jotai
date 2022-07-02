import { atom } from "jotai";
import { IPokemon } from "../types/pokemon";

export const searchAtom = atom<string>("");
export const pokemonAtom = atom<IPokemon[]>([]);
