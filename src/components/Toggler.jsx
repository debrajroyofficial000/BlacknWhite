import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Toggler({ themeMode, darkMode, lightMode }) {
  const handleTheme = () => {
    if (themeMode === "light") darkMode();
    else lightMode();
  };

  return (
    <div className="theme_toggler">
      <button
        onClick={handleTheme}
        className={themeMode === "light" ? "light" : "dark"}
      >
        {themeMode === "light" ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}
export default Toggler;
