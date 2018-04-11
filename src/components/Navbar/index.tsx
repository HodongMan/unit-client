import * as React from 'react';

export default class Navbar extends React.PureComponent<{}, {}> {

    render() {
        return (
            <nav 
                className={'navbar navbar-default navbar-fixed-top nav-transparent'
                + 'overlay-nav sticky-nav nav-white nav-border-bottom'}
                role="navigation"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 pull-left">
                            <a className="logo-light" href="index.html">
                                <img alt="" src="images/UNIT_logo_nav_white.png" className="logo" />
                            </a>
                            <a className="logo-dark" href="index.html">
                                <img alt="" src="images/UNIT_logo_nav.png" className="logo" />
                            </a>
                        </div>
                        <div className="navbar-header col-sm-8 col-xs-2 pull-right">
                            <button 
                                type="button" 
                                className="navbar-toggle" 
                                data-toggle="collapse" 
                                data-target=".navbar-collapse"
                            >
                                <span className="sr-only">Toggle navigation</span> 
                                <span className="icon-bar" /> 
                                <span className="icon-bar" /> 
                                <span className="icon-bar" />
                            </button>
                        </div>
                        <div className="col-md-8 no-padding-right accordion-menu text-right">
                            <div className="navbar-collapse collapse">
                                <ul id="accordion" className="nav navbar-nav navbar-right panel-group">
                                    <li className="dropdown panel">
                                        <a 
                                            href="/" 
                                            className="dropdown-toggle collapsed" 
                                            data-toggle="collapse" 
                                            data-parent="#accordion" 
                                            data-hover="dropdown"
                                        >
                                            About 
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul 
                                            id="collapse1" 
                                            className="dropdown-menu mega-menu panel-collapse collapse mega-menu-full"
                                        >
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Pre Made Homepage</li>
                                                    <li><a href="index.html">Home main</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Other</li>
                                                    <li>
                                                        <a href="/">
                                                            Home - masonry portfolio
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Home - background slider
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/">
                                                            Home - full screen video
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="home-half-screen-video.html">
                                                            Home - half screen video
                                                        </a>
                                                    </li>
                                                    <li><a href="/">Home - text rotator</a></li>
                                                    <li><a href="/">Home - coming soon</a></li>
                                                    <li><a href="/">Home - coming soon (Animation) 
                                                        <span className="menu-new">new</span>
                                                    </a></li>
                                                    <li><a href="/">Home - coming soon (video)</a></li>
                                                    <li><a href="/">Home - full width image</a></li>
                                                    <li><a href="/">Home - gradient with image</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Parallax Image / Typography</li>
                                                    <li><a href="/">Parallax Image - option 1 </a></li>
                                                    <li><a href="/">Parallax Image - option 2</a></li>
                                                    <li><a href="/">Parallax Image - option 3 </a></li>
                                                    <li><a href="/">Parallax Image - option 4</a></li>
                                                    <li><a href="/">Parallax Image - option 5</a></li>
                                                    <li><a href="/">Full parallax home page</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="dropdown-header">Carousel slider</li>
                                                    <li><a href="/">Bootstrap slider - full screen</a></li>
                                                    <li><a href="/">Revolution slider - full screen</a></li>
                                                    <li><a href="/">Revolution slider - half screen</a></li>
                                                    <li><a href="/">owl slider - full screen</a></li>
                                                    <li><a href="/">owl slider - half screen</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Creative Intro Pages</li>
                                                    <li><a href="/">Fashion Intro</a></li>
                                                    <li><a href="/">Restaurant Intro</a></li>
                                                    <li><a href="/">Travel Intro</a></li>
                                                    <li><a href="/">Travel Intro - V2</a></li>
                                                    <li><a href="/">Agency Intro</a></li>
                                                    <li><a href="/">Agency Intro - V2</a></li>
                                                    <li><a href="/">Product Intro</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown panel">
                                        <a 
                                            href="/" 
                                            className="dropdown-toggle collapsed" 
                                            data-toggle="collapse" 
                                            data-parent="#accordion" 
                                            data-hover="dropdown"
                                        >
                                            Activities 
                                            <i className="fa fa-angle-down" />                                    
                                        </a>
                                        <ul 
                                            id="collapse2" 
                                            className="dropdown-menu mega-menu panel-collapse collapse mega-menu-full"
                                        >
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Other</li>
                                                    <li><a href="/">Home - masonry portfolio</a></li>
                                                    <li><a href="/">Home - background slider</a></li>
                                                    <li><a href="/">Home - full screen video</a></li>
                                                    <li><a href="/">Home - text rotator</a></li>
                                                    <li><a href="/">Home - full width image</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Carousel slider</li>
                                                    <li><a href="/">Bootstrap slider - full screen</a></li>
                                                    <li><a href="/">Revolution slider - full screen</a></li>
                                                    <li><a href="/">Revolution slider - half screen</a></li>
                                                    <li><a href="/">owl slider - full screen</a></li>
                                                    <li><a href="/">owl slider - half screen</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown panel">
                                        <a 
                                            href="#collapse5" 
                                            className="dropdown-toggle collapsed" 
                                            data-toggle="collapse" 
                                            data-parent="#accordion" 
                                            data-hover="dropdown"
                                        >
                                                Partner 
                                                <i className="fa fa-angle-down" />
                                        </a>
                                        <ul 
                                            id="collapse5" 
                                            className="dropdown-menu mega-menu panel-collapse collapse mega-menu-full"
                                        >
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Grid</li>
                                                    <li><a href="/">2 Columns</a></li>
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>
                                                    <li><a href="/">5 Columns</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="dropdown-header">Grid - Gutter</li>
                                                    <li><a href="/">2 Columns</a></li>
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>
                                                    <li><a href="/">5 Columns</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="dropdown-header">Grid with Title</li>
                                                    <li><a href="/">2 Columns</a></li>
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>
                                                    <li><a href="/">5 Columns</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Wide</li>
                                                    <li><a href="/">2 Columns</a></li>
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>
                                                    <li><a href="/">5 Columns</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="dropdown-header">Wide - Gutter</li>
                                                    <li><a href="/">2 Columns</a></li>
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>
                                                    <li><a href="/">5 Columns</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Masonry</li>
                                                    <li><a href="/">2 Columns</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="dropdown-header">Other</li>
                                                    <li><a href="/">Parallax</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Single Project Page</li>
                                                    <li><a href="/">Single Project Page 1</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="dropdown-header">Ajax - Project Page</li>
                                                    <li>
                                                        <a href="/" className="simple-ajax-popup-align-top">
                                                            Single Project Page 1
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="simple-ajax-popup-align-top">
                                                            Single Project Page 2
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="simple-ajax-popup-align-top">
                                                            Single Project Page 3
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="simple-ajax-popup-align-top">
                                                            Single Project Page 4
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/" className="simple-ajax-popup-align-top">
                                                            Single Project Page 5
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown panel">
                                        <a 
                                            href="/" 
                                            className="dropdown-toggle collapsed" 
                                            data-toggle="collapse" 
                                            data-parent="#accordion" 
                                            data-hover="dropdown"
                                        >
                                                Sponsor 
                                                <i className="fa fa-angle-down" />
                                        </a>
                                        <ul 
                                            id="collapse4" 
                                            className="dropdown-menu mega-menu panel-collapse collapse mega-menu-full"
                                        >
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Introduction</li>
                                                    <li><a href="/">About Us</a></li>
                                                    <li><a href="/">
                                                        About Us - Option 2 
                                                        <span className="menu-new">new</span
                                                    ></a></li>
                                                    <li><a href="/">Team Members</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Utility</li>
                                                    <li><a href="/">Services</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Page Layout</li>
                                                    <li><a href="/">Full Width</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Gallery</li>
                                                    <li><a href="/">1 Columns</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}