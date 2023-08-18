import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Contact from "../components/contact.jsx";
import Home from "../components/home.jsx";
import Navbar from "../components/navbar.jsx";
import Projects from "../components/projects.jsx";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </main>
  );
}

export default App;
