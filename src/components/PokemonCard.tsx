import { Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { IPokemon } from "../types/pokemon";
import { getAcronym } from "../utils";

interface PokemonCardProps {
  pokemon: IPokemon;
}
const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card variant="outlined">
        {" "}
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {pokemon.id}
          </Typography>
          <Typography variant="h5" component="div">
            {pokemon.name.english}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" component="div">
            {pokemon.type.map((t) => (
              <Chip label={t} key={t} sx={{ mr: 1 }} size="small" />
            ))}
          </Typography>
          <Typography variant="body2" component="span">
            <table>
              <thead>
                <tr>
                  {Object.keys(pokemon.base).map((b) => (
                    <th key={b}>{getAcronym(b)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.values(pokemon.base).map((b, i) => (
                    <td key={i}>{b}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonCard;
