import { Container } from "@mui/system";
import { Provider } from "jotai";
import React from "react";
import Pokemon from "./components/Pokemon";
function App() {
  return (
    <div className="App">
      <Container>
        <Provider>
          <Pokemon />
        </Provider>
      </Container>
    </div>
  );
}

export default App;
