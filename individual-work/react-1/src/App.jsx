import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/style.css";
import "./styles/reset.css";
import Project from "./Project";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <img src="images/logo.svg" width="60px" />
          </div>
          <div className="menu1">
            <p>About</p>
          </div>
          <div className="menu2">
            <p>Services</p>
          </div>
          <div className="menu3">
            <p>Portfolio</p>
          </div>
          <div className="menu4">
            <p>Contact</p>
          </div>
        </div>
      </header>
      <div className="body-container">
        <div className="title">
          <h1>Portfolio</h1>
          <h2>Recent work</h2>
        </div>
      </div>
      <div className="divider"></div>
      <Project
        img="images/andre-alexander-N3V2uhtuDCo-unsplash.jpg"
        title="Project"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iusto
          nam soluta itaque neque perspiciatis, ea at fuga impedit dicta et"
      />
      <Project
        title="project"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iusto
          nam soluta itaque neque perspiciatis, ea at fuga impedit dicta et"
      />
      <div class="footer">
        <p>Copyright © Example.com 2015</p>
      </div>
    </>
  );
}

export default App;
