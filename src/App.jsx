import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Policy from "./Policy";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className='screen-format'>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Policy" element={<Policy />} />
              <Route path="/Contact" element={<Contact />}/>
            </Routes>
          <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App