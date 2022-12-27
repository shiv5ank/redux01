import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Contact from "./component/Contact";
import Service from "./component/Service";
import Home from "./component/Home";
import "./App.css";

function App() {
  const template = useSelector((state) => state.template);
  return (
    <BrowserRouter>
      <div>{template}</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
