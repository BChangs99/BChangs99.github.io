import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">
        Resource Credits
        <ul className="footer-text-links">
          <li>
            <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">
              Linkedin icons created by riajulislam - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/github" title="github icons">
              Github icons created by Pixel perfect - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/download" title="download icons">
              Download icons created by Debi Alpa Nugraha - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/internet" title="internet icons">
              Internet icons created by Freepik - Flaticon
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
