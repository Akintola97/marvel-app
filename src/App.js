import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = '/marvel' element = {<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
