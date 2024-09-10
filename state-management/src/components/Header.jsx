import { useRef } from "react";
import PopUp from "./PopUp";

export default function Header() {
  const popUp = useRef();
  function handleClick() {
    popUp.current.openModal();
  }
  return (
    <div className="header">
      <h1>Welcome</h1>
      <p className="read-the-docs">
        Goal of this project is to provide access the state to all the
        components
      </p>
      <p>Header component</p>
      <button onClick={handleClick}>Total Products</button>
      <PopUp ref={popUp} total="" />
    </div>
  );
}
