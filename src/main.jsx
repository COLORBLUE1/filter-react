import React from "react";
import ReactDOM from "react-dom/client";
// import {Login} from './login.jsx'
import { Main, Footer, Iconfooter } from "./home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <>

    <div>
      <Main />
    </div>

    <div
      style={{
        display: "grid",
        padding: "150px 150px",
        justifyContent: "center",
        paddingBottom: "0"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center"}}>
        <Iconfooter
          
          urlimg="https://upload.wikimedia.org/wikipedia/commons/6/6d/Ionicons_logo-codepen.svg"
          altimg="codepen"
        />
        <Iconfooter
          urlimg="https://upload.wikimedia.org/wikipedia/commons/0/06/Linkedin_circle_black-512.png"
          altimg="Linkedin"
        />
        <Iconfooter
          urlimg="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
          altimg="GitHub"
        />
      </div>
      <Footer />
    </div>
  </>
);
