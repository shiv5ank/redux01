import { setIsLight } from "../utils";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const isLight = useSelector((state) => state.isLight);
  const dispatch = useDispatch();

  return (
    <div className="nav-div">
      <div>Geekster</div>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />
        <Link to="/service">Service</Link>
        <br />
      </div>

      <button
        onClick={() => {
          const message = `Clicked or Changed to ${isLight ? "Dark" : "Light"}`;
          dispatch(setIsLight(message));
        }}
      >
        Toggle Theme to {isLight ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Navbar;
