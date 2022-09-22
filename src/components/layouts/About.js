import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <section id="about">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
    					<h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s">WE ARE <span>AWESOME</span></h2>
    				</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.6s">
						<div className="media">
							<div className="media-heading-wrapper">
								<div className="media-object pull-left">
									<i className="fa fa-mobile"></i>
								</div>
								<h3 className="media-heading">FULLY RESPONSIVE</h3>
							</div>
							<div className="media-body">
								<p>Awesome responsive template is provided by <Link rel="nofollow" to="http://www.templatemo.com" target="_parent">templatemo</Link> website. This is Bootstrap v3.3.2 layout built on HTML5 CSS3. You can use this for any purpose. Please tell your friends about it.</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow fadeInUp" data-wow-offset="50" data-wow-delay="0.9s">
						<div className="media">
							<div className="media-heading-wrapper">
								<div className="media-object pull-left">
									<i className="fa fa-comment-o"></i>
								</div>
								<h3 className="media-heading">FREE SUPPORT</h3>
							</div>
							<div className="media-body">
								<p>Credits go to <Link rel="nofollow" to="http://pixabay.com">Pixabay</Link> for homepage image and <Link rel="nofollow" to="http://unsplash.com">Unsplash</Link> for portfolio images. Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie.</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
						<div className="media">
							<div className="media-heading-wrapper">
								<div className="media-object pull-left">
									<i className="fa fa-html5"></i>
								</div>
								<h3 className="media-heading">HTML5 &AMP; CSS3</h3>
							</div>
							<div className="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget diam et laoreet phasellus ut nisi id leo molestie. Adipiscing vitae vel quam proin eget mauris eget. Lorem ipsum dolor sit amet.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  )
}

export default About