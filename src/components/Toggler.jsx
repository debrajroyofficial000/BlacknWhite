import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Toggler({ themeMode, toggleTheme }) {
  return (
    <div className="theme_toggler">
      <button
        onClick={toggleTheme}
        className={themeMode === "light" ? "light" : "dark"}
      >
        {themeMode === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}
export default Toggler;
