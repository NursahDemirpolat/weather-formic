import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";

function Footer() {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://www.linkedin.com/in/nur%C5%9Fah-demirpolat/">
          <AiOutlineLinkedin className="icon" />
        </a>
        <a href="https://github.com/NursahDemirpolat">
          <VscGithub className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
