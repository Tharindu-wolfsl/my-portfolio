import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio = () => {
  return (
    <section id="portfolio">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-12">
    					<h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s"><span>AWESOME</span> PORTFOLIO</h2>
    				</div>
    				<div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
    					   <img src="images/portfolio-img1.jpg" className="img-responsive" alt="portfolio img 1"/>
                                <div className="portfolio-overlay">
                                    <h4>Project One</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                                    <Link to="#" className="btn btn-default">DETAIL</Link>
                                </div>
                        </div>
    				</div>
    				<div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/portfolio-img2.jpg" className="img-responsive" alt="portfolio img 2"/>
                                <div className="portfolio-overlay">
                                    <h4>Project Two</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                                    <Link to="#" className="btn btn-default">DETAIL</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/portfolio-img3.jpg" className="img-responsive" alt="portfolio img 3"/>
                                <div className="portfolio-overlay">
                                    <h4>Project Three</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                                    <Link to="#" className="btn btn-default">DETAIL</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/portfolio-img4.jpg" className="img-responsive" alt="portfolio img 4"/>
                                <div className="portfolio-overlay">
                                    <h4>Project Four</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                                    <Link to="#" className="btn btn-default">DETAIL</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/portfolio-img3.jpg" className="img-responsive" alt="portfolio img 3"/>
                                <div className="portfolio-overlay">
                                    <h4>Project Five</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                                    <Link to="#" className="btn btn-default">DETAIL</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/portfolio-img4.jpg" className="img-responsive" alt="portfolio img 4"/>
                                <div className="portfolio-overlay">
                                    <h4>Project Six</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                                    <Link to="#" className="btn btn-default">DETAIL</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/portfolio-img1.jpg" className="img-responsive" alt="portfolio img 1"/>
                                <div className="portfolio-overlay">
                                    <h4>Project Seven</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                                    <Link to="#" className="btn btn-default">DETAIL</Link>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
                        <div className="portfolio-thumb">
                           <img src="images/portfolio-img2.jpg" className="img-responsive" alt="portfolio img 2"/>
                                <div className="portfolio-overlay">
                                    <h4>Project Eight</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitquisque tempus ac eget dia.</p>
                                    <Link to="#" className="btn btn-default">DETAIL</Link>
                                </div>
                        </div>
                    </div>
    			</div>
    		</div>
    	</section>
  )
}

export default Portfolio