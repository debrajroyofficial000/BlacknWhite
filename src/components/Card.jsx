import Toggler from "./Toggler";
import Profile from "./Profile";
import Links from "./Links";
import useTheme from "../context/ThemeProvider";
function Card() {
  const { theme, darkTheme, lightTheme } = useTheme();
  const handleTheme = () => {
    if (theme === "light") darkTheme();
    else lightTheme();
  };
  return (
    <div className={`card_container ${theme === "light" ? "light" : "dark"}`}>
      <Toggler themeMode={theme} toggleTheme={handleTheme} />
      <Profile />
      <Links />
    </div>
  );
}
export default Card;
