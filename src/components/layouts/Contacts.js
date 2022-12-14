import React from 'react'
import {Link} from 'react-router-dom'

const Contacts = () => {
  return (
    <section id="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">CONTACT <span>AWESOME</span></h2>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
                <form action="#" method="post">
                    <label>NAME</label>
                    <input name="fullname" type="text" class="form-control" id="fullname"/>
                         
                    <label>EMAIL</label>
                    <input name="email" type="email" class="form-control" id="email"/>
                         
                    <label>MESSAGE</label>
                    <textarea name="message" rows="4" class="form-control" id="message"></textarea>
                    
                    <input type="submit" class="form-control"/>
                </form>
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
                <address>
                    <p class="address-title">OUR ADDRESS</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</span>
                    <p><i class="fa fa-phone"></i> 010-020-0340</p>
                    <p><i class="fa fa-envelope-o"></i> awesome@company.com</p>
                    <p><i class="fa fa-map-marker"></i> 663 New Walk Roadside, Birdeye View, GO 11020</p>
                </address>
                <ul class="social-icon">
                    <li><h4>WE ARE SOCIAL</h4></li>
                    <li><Link to="#" class="fa fa-facebook"></Link></li>
                    <li><Link to="#" class="fa fa-twitter"></Link></li>
                    <li><Link to="#" class="fa fa-instagram"></Link></li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Contacts