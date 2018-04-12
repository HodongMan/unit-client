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
                            <a className="logo-light" href="/">
                                <img alt="" src="images/UNIT_logo_nav_white.png" className="logo" />
                            </a>
                            <a className="logo-dark" href="/">
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
                                        
                                    </li>
                                    <li className="dropdown panel">
                                        <a 
                                            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                                                event.preventDefault();
                                                if (window) {
                                                    window[`scrollTo`](0, 1550);
                                                }
                                            }}
                                            href="/" 
                                            className="dropdown-toggle collapsed" 
                                            data-toggle="collapse" 
                                            data-parent="#accordion" 
                                            data-hover="dropdown"
                                        >
                                            Activities 
                                            <i className="fa fa-angle-down" />                                    
                                        </a>
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