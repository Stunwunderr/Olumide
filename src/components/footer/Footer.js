import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { developer } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <a href={developer.link} className="footer-text" style={{ color: props.theme.text }}>
          Made by {developer.sub}
        </a>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
