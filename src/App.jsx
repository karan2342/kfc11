import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;