import "./App.css";
import "./css/header.css";
import "./css/menu.css";
import "./css/test.css";
import Header from "./components/header/Hader.jsx";
import Menu from "./components/menu/Menu.jsx";
import Main from "./components/Main/main.jsx";
import Recomended from "./components/Cards/Recomended";
function App() {
  return (
    <>
      <Header />
      <div className="flex ">
      <Menu />
      <Main />
      <Recomended/></div>
      
    </>
  );
}

export default App;
