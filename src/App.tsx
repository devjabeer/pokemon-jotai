import { Container } from "@mui/system";
import React from "react";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <div className="App">
      <Container>
        <Pokemon />
      </Container>
    </div>
  );
}

export default App;
