import React from "react";
import Navbar from "../shared/Header";

function Header() {
  const today = new Date();
  return (
    <div>
      <Navbar navbar bgColor = "darkviolet">
        <h2>{today.toDateString()}</h2>
        <h1>Griitch Weather</h1>
        <h3>
          Made by
          <a href="https://github.com/griitch" target = "_blank" rel="noreferrer" >
             @griitch
          </a>
        </h3>
      </Navbar>
    </div>
  );
}

export default Header;
