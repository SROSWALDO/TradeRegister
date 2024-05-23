import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Tables from "./components/Tables/Tables";

function App() {
  return (
    <>
      <div classNameName="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registers" element={ <Tables/> } />
        </Routes>
      </div>
    </>
  );
}

export default App;
