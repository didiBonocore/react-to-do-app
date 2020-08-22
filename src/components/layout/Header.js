import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>To Do List</h1>
    </header>
  );
}

const headerStyle = {
  background: "#2d4059",
  color: "#decdc3",
  textAlign: "center",
  padding: "10px"
};
