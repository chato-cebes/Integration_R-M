import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cards from "./componentes/Cards";
import SearchBar from "./componentes/SearchBar";


function App() {
  return (
    <div className="App">
    <SearchBar/>
      <Routes>
        <Route path="/" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
