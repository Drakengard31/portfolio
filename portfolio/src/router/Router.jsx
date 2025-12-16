import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}