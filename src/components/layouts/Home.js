import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <section id="home">
    <div className="container">
        <div className="row">
            <div className="col-md-offset-2 col-md-8">
                <h1 className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">We make templates that are <span>awesome</span></h1>
                <div className="element">
                    <div className="sub-element">Hello, this is Typed.js</div>
                    <div className="sub-element">Awesome Template is provided by templatemo.com website for everyone</div>
                    <div className="sub-element">Download, edit and apply this awesome template for your websites</div>
                </div>
                <Link data-scroll to="#about" className="btn btn-default wow fadeInUp" data-wow-offset="50" data-wow-delay="0.6s">GET STARTED</Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Home