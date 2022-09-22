import React from 'react'

const Teamcard = ({icon,title,content}) => {
  return (
    <div class="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="1.3s">
    					<div class="team-wrapper">
    						<img src="images/team-img1.jpg" class="img-responsive" alt="team img 1"/>
    							<div class="team-des">
    								<h4>TRACY</h4>
    								<span>Designer</span>
    								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molest.</p>
    							</div>
    					</div>
    				</div>
  )
}

export default Teamcard