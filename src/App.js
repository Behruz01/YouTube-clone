import "./App.css";
import "./css/header.css";
import "./css/menu.css";
import "./css/test.css";
import Main from "./components/Main/main.jsx";
import Layout from "./components/layout/Layout";
function App() {
  return (
    <>
      <Layout isSinglePage={false}>
            <Main/>
        </Layout>
    </>
  );
}


export default App;
