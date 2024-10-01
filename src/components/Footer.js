import React from 'react'
import {pageLinks, socialLinks} from "../data";

export const Footer = () => {
  return (
    <footer className="section footer">
          <ul className="footer-links">
            {pageLinks.map(({id,href,text})=> {
              return (<li key={id}>
                <a href={href} className="footer-link">{text}</a>
              </li>);
            })}
          </ul>
          <ul className="footer-icons">
            {socialLinks.map(({id,href,icon})=> {
              return (
                  <li key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="footer-icon"
                ><i className={icon}></i
                ></a>
              </li>);
            })}
          </ul>
          <p className="copyright">
            copyright &copy; Backroads travel tours company
            <span id="date"></span> all rights reserved
          </p>
        </footer>
  )
}
