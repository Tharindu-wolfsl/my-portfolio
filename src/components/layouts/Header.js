import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-4 col-xs-12">
                <p><i className="fa fa-phone"></i><span> Phone</span>+94766354069</p>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
                <p><i className="fa fa-envelope-o"></i><span> Email</span><Link to="#!">tharindupriyashan18@gmail.com</Link></p>
            </div>
            <div className="col-md-5 col-sm-4 col-xs-12">
                <ul className="social-icon">
                    <li><span>Meet us on</span></li>
                    <li><Link to="#!" className="fa fa-facebook"></Link></li>
                    <li><Link to="#!" className="fa fa-twitter"></Link></li>
                    <li><Link to="#!" className="fa fa-instagram"></Link></li>
                    <li><Link to="#!" className="fa fa-apple"></Link></li>
                </ul>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header