import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import Navbar from './components/Navbar';
import Index from './components/Index';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import Config from './components/Config';
import Admin from './components/Admin';
import Results from './components/Results';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/config" element={<Config />} />
          <Route path="/results" element={<Results />} />
          <Route path="/edgar" element={<Admin />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
