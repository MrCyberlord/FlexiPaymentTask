import "./App.css";
import { Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import Display from "./Display";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="display" element={<Display />} />
      </Routes>
    </div>
  );
}

export default App;
