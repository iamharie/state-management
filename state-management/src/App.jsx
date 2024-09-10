import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="read-the-docs">
        Goal of this project is to provide access the state to all the
        components
      </p>
      <Header />
      <Result />
      <Footer />
    </>
  );
}

export default App;
