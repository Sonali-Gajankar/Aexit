import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Navbar from '../components/navbar.jsx';
import Home from "../components/home.jsx";
import Contact from "../components/contact.jsx";
import SequenceProject from '../components/sequence_project.jsx';

function App() {

  return (
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="project" element={<Projects />} /> */}
              <Route path="contact" element={<Contact />} />
              <Route path='sequence' element={<SequenceProject />}/>
          </Routes>
        </BrowserRouter>
        <Outlet />
      </main>
  )
}

export default App;
