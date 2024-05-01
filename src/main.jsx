import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import "./styles/animate.min.css"; 
import "./styles/fontawesome-all.min.css";
import "./styles/swiper-bundle.min.css";
import "./styles/slick.css";
import "./styles/default.css";
import "./styles/style.css";
import "./styles/responsive.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
