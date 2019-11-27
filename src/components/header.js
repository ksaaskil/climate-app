import React from "react"
import { Link } from "gatsby"
import "./header.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header className="header">
    <div className="header__content">
      <div className="header__flex">
        <div className="header__title">
          <Link to="/">{siteTitle}</Link>
        </div>
        <div className="header__nav">
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
