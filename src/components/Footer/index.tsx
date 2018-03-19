import * as React from 'react';

export default class Footer extends React.PureComponent<{}, {}> {

    render() {
        return (
            <footer>
                <div className=" bg-white footer-top">
                    <div className="container">
                        <div className="row margin-four">
                            <div className="col-md-4 col-sm-4 text-center">
                                <i className="icon-phone small-icon black-text" />
                                <h6 className="black-text margin-two no-margin-bottom">
                                    123-456-7890
                                </h6>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center">
                                <i className="icon-map-pin small-icon black-text" />
                                <h6 className="black-text margin-two no-margin-bottom">
                                    Victoria, United States
                                </h6>
                            </div>
                            <div className="col-md-4 col-sm-4 text-center">
                                <i className="icon-envelope small-icon black-text" />
                                <h6 className="margin-two no-margin-bottom">
                                    <a href="mailto:no-reply@domain.com" className="black-text">
                                        no-reply@domain.com
                                    </a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-middle">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 footer-link1 xs-display-none">
                            <h5>About Us</h5>
                            <p className="footer-text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-4 footer-link2 col-md-offset-3">
                            <h5>Company</h5>
                            <ul>
                                <li><a href="/">About Company</a></li>
                                <li><a href="/">What We Do</a></li>
                                <li><a href="/">What We Think</a></li>
                                <li><a href="/">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-4  footer-link3">
                            <h5>Services</h5>
                            <ul>
                                <li><a href="/">Web Development</a></li>
                                <li><a href="/">Graphic Design</a></li>
                                <li><a href="/">Copywriting</a></li>
                                <li><a href="/">Online Marketing</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-4  footer-link4">
                            <h5>Introduction</h5>
                            <ul>
                                <li><a href="/">Team Members</a></li>
                                <li><a href="/">Testimonials</a></li>
                                <li><a href="/">Our Clients</a></li>
                                <li><a href="/">Careers With Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="wide-separator-line bg-mid-gray no-margin-lr margin-three no-margin-bottom" />
                    <div className="row margin-four no-margin-bottom">
                        <div className="col-md-6 col-sm-12 sm-text-center sm-margin-bottom-four">
                            <ul className="list-inline footer-link text-uppercase">
                                <li><a href="/">About</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Testimonials</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-sm-12 footer-social text-right sm-text-center">
                            <a target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook" /></a>
                            <a target="_blank" href="https://twitter.com/"><i className="fa fa-twitter" /></a>
                            <a target="_blank" href="https://plus.google.com"><i className="fa fa-google-plus" /></a>
                            <a target="_blank" href="https://dribbble.com/"><i className="fa fa-dribbble" /></a>
                            <a target="_blank" href="https://www.youtube.com/"><i className="fa fa-youtube" /></a>
                            <a target="_blank" href="https://www.linkedin.com/"><i className="fa fa-linkedin" /></a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-dark-gray footer-bottom">
                    <div className="container">
                        <div className="row margin-three">
                            <div 
                                className={'col-md-6 col-sm-6 col-xs-12 copyright text-left letter-spacing-1'
                                + ' xs-text-center xs-margin-bottom-one'}
                            >
                                &copy; 2015 H-Code is proudly powered by ThemeZaa.
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 footer-logo text-right xs-text-center">
                                <a href="index.html"><img src="images/logo-light-gray.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" className="scrollToTop"><i className="fa fa-angle-up" /></a>
            </footer>
        );
    }
}