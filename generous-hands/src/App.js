import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Discover from './components/pages/Discover';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/discover' element={<Discover />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
