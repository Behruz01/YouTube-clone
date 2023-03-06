import "./App.css";
import "./css/header.css";
import "./css/menu.css";
import "./css/test.css";
import Main from "./components/Main/main.jsx";
import Layout from "./components/layout/Layout";
import Render from "./components/useEffect/render";
function App() {
  return (
    <>
      <Layout isSinglePage={false}>
            <Main/>
        </Layout>
        <Render/>
    </>
  );
}


export default App;
