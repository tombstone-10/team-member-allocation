import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Employees from "./components/Employees";

function App() {
  return (
    <>
      <div>
        <Header />
        <Employees />
        <Footer />
      </div>
    </>
  );
}

export default App;
