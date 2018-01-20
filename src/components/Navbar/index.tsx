import * as React from 'react';

export default class Navbar extends React.PureComponent<{}, {}> {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
                <div className="container topnav">
                    <div className="navbar-header">
                        <button 
                            type="button" 
                            className="navbar-toggle" 
                            data-toggle="collapse" 
                            data-target="#bs-example-navbar-collapse-1"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand topnav" href="/">UnithonWithU</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#services">Board</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>  
        );
    }
}