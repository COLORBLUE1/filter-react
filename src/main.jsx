import React from "react";
import ReactDOM from "react-dom/client";
// import {Login} from './login.jsx'
import { Home } from "./home.jsx";
import { Main } from "./home.jsx";
import { Footer } from "./home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        zIndex: "999",
        width: "100%"
      }}
    >
      <Home texto="Telefonos" url="#" />
      <Home texto="Computadores" url="#" />
    </div>

    <div style={{}}>
    <Main   
      
      />
    </div>
    {/* <Login /> */}

    <Footer/>
  </>
);
