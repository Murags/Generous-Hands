import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';
import Gallery from './components/pages/Gallery';
import About from './components/pages/About';
import Dashboard from './components/pages/Dashboard/Dashboard';
import OrganizationPage from './components/pages/OrganizationPage';
import Donate from './components/pages/Donate';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/discover' element={<Discover />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/gallery' element={<Gallery />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path="/organization/:id" element={<OrganizationPage />} />
      <Route path='/organization/:id/donate' element={<Donate />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
