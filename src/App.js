import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./conpacts/Sidebar";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import "./pages/Homepage.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/homepage" element={<Homepage />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </div>
    </div>
  );
}
