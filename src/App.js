import "./App.css";
import "./components/header.css";
import "./components/menu/menu.css";
import "./components/Main/main.css";
import "./components/test/test.css";
import Header from "./components/header/Hader.jsx";
import Menu from "./components/menu/Menu.jsx";
import Main from "./components/Main/main.jsx";
import Test from "./components/test/test.jsx";

function App() {
  return (
    <>
      <Test />
      <Header />
      <Menu />
      <Main />
    </>
  );
}

export default App;
