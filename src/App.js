import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/:id' element = {<Details />} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
