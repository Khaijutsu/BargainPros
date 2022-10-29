import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Deals from "./Deals";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Deals" element={<Deals />} />
          </Routes>
        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App