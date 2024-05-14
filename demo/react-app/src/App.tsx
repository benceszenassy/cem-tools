import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RadioButton, RadioGroup, ScopeProvider } from "lit-app/dist/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ScopeProvider prefix="test_" suffix="_test2">
        <RadioGroup>
          <RadioButton value=""></RadioButton>
          <RadioButton></RadioButton>
          <RadioButton></RadioButton>
        </RadioGroup>
      </ScopeProvider>
    </>
  );
}

export default App;
