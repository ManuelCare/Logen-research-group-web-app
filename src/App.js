import './App.css';

import { } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"

import { BrowserRouter, Routes, Route, Outlet  } from "react-router-dom";


import Home from "./routes/home";
import Projects from "./routes/projects";
import People from "./routes/people";
import About from "./routes/about";
import Contact from "./routes/contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <div className='Content'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="people" element={<People/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
          </Routes>
        </div>
      </div>
      <Outlet/>
    </BrowserRouter>
  );
}

export default App;