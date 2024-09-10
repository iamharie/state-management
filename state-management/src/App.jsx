import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainStore from "./components/MainStore";
import Inventory from "./components/Inventory";
import Result from "./components/Result";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainStore />
      <Inventory />
      <Result />
      <Footer />
    </>
  );
}

export default App;
