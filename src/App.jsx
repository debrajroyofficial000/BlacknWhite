import { useState } from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import Card from "./components/Card";
function App() {
  const [theme, setTheme] = useState("light");
  function darkTheme() {
    setTheme("dark");
  }
  function lightTheme() {
    setTheme("light");
  }
  return (
    <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
      <section className="container">
        <Card />
      </section>
    </ThemeProvider>
  );
}

export default App;
