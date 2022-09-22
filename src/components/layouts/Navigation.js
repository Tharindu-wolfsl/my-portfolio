import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = () => {
  return (
    <nav className="navbar navbar-default templatemo-nav" role="navigation">
    <div className="container">
        <div className="navbar-header">
            <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="icon icon-bar"></span>
                <span className="icon icon-bar"></span>
                <span className="icon icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Awesome</Link>
        </div>
        <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><Link to="#top">HOME</Link></li>
                <li><Link to="#about">ABOUT</Link></li>
                <li><Link to="#team">TEAM</Link></li>
                <li><Link to="#service">SERVICE</Link></li>
                <li><Link to="#portfolio">PORTFOLIO</Link></li>
                <li><Link to="#contact">CONTACT</Link></li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default Navigation