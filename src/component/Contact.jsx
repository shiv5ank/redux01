import { useSelector } from "react-redux";
import "../App.css";
import Navbar from "./Navbar";

const Contact = () => {
  const isLight = useSelector((state) => state.isLight);
  return (
    <div className={isLight ? "light" : "dark"}>
      <Navbar />
      <h1>You can mail me help@geekster.in</h1>
    </div>
  );
};

export default Contact;
