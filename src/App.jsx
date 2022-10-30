import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Deals from "./Deals";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Deals" element={<Deals />} />
            <Route path="/Contact" element={<Contact />}/>
          </Routes>
        </div>
        <Footer />
      
      </div>
    </BrowserRouter>
  );
}

export default App