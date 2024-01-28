import Toggler from "./Toggler";
import Profile from "./Profile";
import Links from "./Links";
import useTheme from "../context/ThemeProvider";
function Card() {
  const { theme, darkTheme, lightTheme } = useTheme();
  return (
    <div className={`card_container ${theme === "light" ? "light" : "dark"}`}>
      <Toggler themeMode={theme} darkMode={darkTheme} lightMode={lightTheme} />
      <Profile />
      <Links />
    </div>
  );
}
export default Card;
