import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />   {/* ✅ Ensure "/" is Home */}
      <Route path="/menu" element={<Menu />} />
      <Route path="/story" element={<Story />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
