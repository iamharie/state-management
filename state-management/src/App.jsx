import ProductCountProvider from "./store/product-count-context";

import "./App.css";

//Components Import
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainStore from "./components/MainStore";
import Inventory from "./components/Inventory";
import Result from "./components/Result";
import Aside from "./components/Aside";
import TemplateReducer from "./components/TemplateReducer";

function App() {
  return (
    <>
      <Aside />
      <ProductCountProvider>
        <Header />
        <MainStore />
        <Inventory />
        <Result />
        <Footer />
        <TemplateReducer />
      </ProductCountProvider>
    </>
  );
}

export default App;
