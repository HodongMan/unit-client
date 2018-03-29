import * as React from 'react';

export default class Navbar extends React.PureComponent<{}, {}> {

    render() {
        return (
            <nav 
                className={'navbar navbar-default navbar-fixed-top nav-transparent'
                + 'overlay-nav sticky-nav nav-white nav-border-bottom shrink-nav'}
                role="navigation"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 pull-left">
                            <a className="logo-light" href="index.html">
                                <img alt="" src="images/UNIT_logo_nav.png" className="logo" />
                            </a>
                            <a className="logo-dark" href="index.html">
                                <img alt="" src="images/UNIT_logo_nav.png" className="logo" />
                            </a>
                        </div>
                        <div className="col-md-2 no-padding-left search-cart-header pull-right">
                            <div id="top-search">
                                <a href="#search-header" className="header-search-form">
                                    <i className="fa fa-search search-button" />
                                </a>
                            </div>
                            <form id="search-header" className="mfp-hide search-form-result">
                                <div className="search-form position-relative">
                                    <button type="submit" className="fa fa-search close-search search-button" />
                                    <input type="text" className="search-input" placeholder="Enter your keywords..."/>
                                </div>
                            </form>
                            <div className="top-cart">
                                <a href="#" className="shopping-cart">
                                    <i className="fa fa-shopping-cart" />
                                    <div className="subtitle">(1) Items</div>
                                </a>
                                <div className="cart-content">
                                    <ul className="cart-list">
                                        <li>
                                            <a title="Remove item" className="remove" href="#">×</a>
                                            <a href="#">
                                                <img width="90" height="90" alt="" src="http://placehold.it/90x90" />
                                                Leather Craft
                                            </a>
                                            <span className="quantity">1 × <span className="amount">$160</span></span>
                                            <a href="#">Edit</a>
                                        </li>
                                    </ul>
                                    <p className="total">Subtotal: <span className="amount">$160</span></p>
                                    <p className="buttons">
                                        <a 
                                            href="/" 
                                            className={'btn btn-very-small-white no-margin-bottom '
                                            + 'margin-seven pull-left no-margin-lr'}
                                        >
                                            View Cart
                                        </a>
                                        <a 
                                            href="/" 
                                            className={'btn btn-very-small-white no-margin-bottom '
                                            + 'margin-seven no-margin-right pull-right'}
                                        >
                                            Checkout
                                        </a>
                                    </p>
                                </div>
                            </div>
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
                                            Home 
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
                                                    <li><a href="home-fashion.html">Home fashion</a></li>
                                                    <li><a href="home-architecture.html">Home architecture</a></li>
                                                    <li><a href="home-spa.html">Home spa</a></li>
                                                    <li><a href="home-agency.html">Home agency</a></li>
                                                    <li><a href="home-restaurant.html">Home restaurant</a></li>
                                                    <li><a href="home-travel-agency.html">Home travel agency</a></li>
                                                    <li><a href="home-corporate.html">Home corporate</a></li>
                                                    <li><a href="home-photography.html">Home photography</a></li>

                                                    <li><a href="home-shop.html">Home shop</a></li>
                                                    <li><a href="home-blog.html">Home blog</a></li>
                                                    <li><a href="home-blog-grid.html">Home blog grid</a></li>
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
                                            One Page 
                                            <i className="fa fa-angle-down" />                                    
                                        </a>
                                        <ul 
                                            id="collapse2" 
                                            className="dropdown-menu mega-menu panel-collapse collapse mega-menu-full"
                                        >
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Pre Made Homepage</li>
                                                    <li><a href="/">Home main</a></li>
                                                    <li><a href="/">Home fashion</a></li>
                                                    <li><a href="/">Home architecture</a></li>
                                                    <li><a href="/">Home spa</a></li>
                                                    <li><a href="/">Home agency</a></li>
                                                    <li><a href="/">Home agency - option 2 
                                                        <span className="menu-new">new</span>
                                                    </a></li>
                                                    <li><a href="/">Home restaurant</a></li>
                                                    <li><a href="/">Home travel agency</a></li>
                                                    <li><a href="/">Home corporate</a></li>
                                                    <li><a href="/">Home personal</a></li>
                                                    <li><a href="/">Home wedding</a></li>
                                                    <li><a href="/">Landing page</a></li>
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
                                                </ul>
                                            </li>
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
                                                Portfolio 
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
                                                <ul>
                                                    <li className="dropdown-header">Wide with Title</li>
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
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>
                                                    <li><a href="/">5 Columns</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="dropdown-header">Other</li>
                                                    <li><a href="/">Parallax</a></li>
                                                    <li><a href="/">With Short Description</a></li>
                                                    <li><a href="/">Portfolio lightbox</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Single Project Page</li>
                                                    <li><a href="/">Single Project Page 1</a></li>
                                                    <li><a href="/">Single Project Page 2</a></li>
                                                    <li><a href="/">Single Project Page 3</a></li>
                                                    <li><a href="/">Single Project Page 4</a></li>
                                                    <li><a href="/">Single Project Page 5</a></li>
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
                                                Pages 
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
                                                    <li><a href="/">Testimonials</a></li>
                                                    <li><a href="/">Our Clients</a></li>
                                                    <li><a href="/">Careers</a></li>
                                                    <li><a href="/">Contact Us</a></li>
                                                    <li><a href="/">Sitemap</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Utility</li>
                                                    <li><a href="/">Services</a></li>
                                                    <li><a href="/">FAQ'S</a></li>
                                                    <li><a href="/">Login</a></li>
                                                    <li><a href="/">Register</a></li>
                                                    <li><a href="/">Not Found (404)</a></li>
                                                    <li><a href="/">Maintenance Page</a></li>
                                                    <li><a href="/">Under Construction</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Page Layout</li>
                                                    <li><a href="/">Full Width</a></li>
                                                    <li><a href="/">Full Width - Wide</a></li>
                                                    <li><a href="/">Left Sidebar</a></li>
                                                    <li><a href="/">Right Sidebar</a></li>
                                                    <li><a href="/">Both Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Gallery</li>
                                                    <li><a href="/">1 Columns</a></li>
                                                    <li><a href="/">2 Columns</a></li>
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>

                                                    <li><a href="gallery-6columns.html">6 Columns</a></li>
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
                                            Elements
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul 
                                            id="collapse3" 
                                            className="dropdown-menu mega-menu panel-collapse collapse mega-menu-full"
                                        >
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Slider</li>
                                                    <li><a href="/">Bootstrap</a></li>
                                                    <li><a href="/">Revolution</a></li>
                                                    <li><a href="/">Owl</a></li>
                                                </ul>
                                                <ul>
                                                    <li className="dropdown-header">Header</li>
                                                    <li><a href="/">Light Version</a></li>
                                                    <li><a href="/">
                                                        Light Version - Option 2 
                                                        <span className="menu-new">new</span>
                                                    </a></li>
                                                    <li><a href="/">Dark Version</a></li>
                                                    <li><a href="/">Transparent Version - Dark</a></li>
                                                    <li><a href="/">Transparent Version - Light</a></li>
                                                    <li><a href="/">Static Sticky</a></li>
                                                    <li><a href="/">
                                                        Hamburger Menu <span className="menu-new">new</span>
                                                    </a></li>
                                                    <li><a href="/">
                                                        Hamburger Menu - Option 2 <span className="menu-new">new</span>
                                                    </a></li>
                                                    <li><a href="/">
                                                        Hamburger Menu - Option 3 <span className="menu-new">new</span>
                                                    </a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Page Titles</li>
                                                    <li><a href="/">Title white</a></li>
                                                    <li><a href="/">Title gray</a></li>
                                                    <li><a href="/">Title dark gray</a></li>
                                                    <li><a href="/">Title black</a></li>
                                                    <li><a href="/">Title with image</a></li>
                                                    <li><a href="/">Title large</a></li>
                                                    <li><a href="/">Title small white</a></li>
                                                    <li><a href="/">Title small gray</a></li>
                                                    <li><a href="/">Title small dark gray</a></li>
                                                    <li><a href="/">Title small black</a></li>
                                                    <li><a href="/">Title center align</a></li>
                                                </ul>
                                            </li>

                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Other</li>
                                                    <li><a href="/">
                                                        <i className="fa fa-plus-square" />
                                                        Accordions
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-tasks" />
                                                        Progress Bar
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-link" />
                                                        Buttons
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-th-large" />
                                                        Features Box
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-align-justify" />
                                                        Form
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-th" />Grid
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-star-o" />
                                                        Icons Et-line
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-star" />
                                                        Icons Font Awesome
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-comment" />
                                                        Alert massage
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-outdent" />
                                                        Tabs
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-font" />
                                                        Typography
                                                    </a></li>
                                                    <li><a href="video-sound.html">
                                                        <i className="fa fa-video-camera" />
                                                        Video / Sound
                                                    </a></li>
                                                    <li><a href="/">
                                                        <i className="fa fa-circle-o-notch" />
                                                        Counter and Skills
                                                    </a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Image Gallery</li>
                                                    <li><a href="/">Single Image Lightbox</a></li>
                                                    <li><a href="/">Lightbox Gallery</a></li>
                                                    <li><a href="/">Zoom gallery</a></li>
                                                    <li><a href="popup-with-form.html">Popup with Form</a></li>
                                                    <li><a href="modal-popup.html">Modal Popup</a></li>
                                                    <li><a href="open-youtube-video.html">Open YouTube Video</a></li>
                                                    <li><a href="open-vimeo-video.html">Open Vimeo Video</a></li>
                                                    <li><a href="open-google-map.html">Open Google Map</a></li>
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
                                            Blog 
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul 
                                            id="collapse6" 
                                            className="dropdown-menu panel-collapse collapse mega-menu-full" 
                                            role="menu"
                                        >
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Grid</li>
                                                    <li><a href="/">2 Columns</a></li>
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>
                                                    <li><a href="/">Full width</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Masonry</li>
                                                    <li><a href="/">2 Columns</a></li>
                                                    <li><a href="/">3 Columns</a></li>
                                                    <li><a href="/">4 Columns</a></li>
                                                    <li><a href="/">Full width</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Default</li>
                                                    <li><a href="/">Right sidebar</a></li>
                                                    <li><a href="/">Left sidebar</a></li>
                                                    <li><a href="/">Full width</a></li>
                                                </ul>
                                            </li>
                                            <li className="mega-menu-column col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Single</li>
                                                    <li><a href="/">Right sidebar</a></li>
                                                    <li><a href="/">Left sidebar</a></li>
                                                    <li><a href="/">Full width</a></li>
                                                    <li><a href="/">Full width with image slider</a></li>
                                                    <li><a href="/">Full width with lightbox gallery</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown panel simple-dropdown">
                                        <a 
                                            href="/" 
                                            className="dropdown-toggle collapsed" 
                                            data-toggle="collapse" 
                                            data-parent="#accordion" 
                                            data-hover="dropdown"
                                        >
                                            Shop 
                                            <i className="fa fa-angle-down" />
                                        </a>
                                        <ul 
                                            id="collapse7" 
                                            className="dropdown-menu panel-collapse collapse" 
                                            role="menu"
                                        >
                                            <li className="dropdown-header">For Shopping Cart</li>
                                            <li><a href="/l">Shop homepage</a></li>
                                            <li><a href="/">Shop with sidebar - grid</a></li>
                                            <li><a href="/">Shop with sidebar - list</a></li>
                                            <li><a href="/">Shop full width</a></li>
                                            <li><a href="/">Single product</a></li>
                                            <li><a href="/">Cart</a></li>
                                            <li><a href="/">Checkout</a></li>
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