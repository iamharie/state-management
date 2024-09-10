import { useState } from "react";

import "./App.css";
//Components Import
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainStore from "./components/MainStore";
import Inventory from "./components/Inventory";
import Result from "./components/Result";

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <Header total={count} />
      <MainStore add={handleAdd} minus={handleMinus} />
      <Inventory add={handleAdd} minus={handleMinus} />
      <Result total={count} />
      <Footer />
    </>
  );
}

export default App;
