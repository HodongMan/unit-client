import * as React from 'react';

export default class NotFound extends React.PureComponent<{}, {}> {
    
    render() {
        return (
            <section className="content-top-margin no-padding-bottom border-top wow fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-sm-8 col-xs-11 text-center center-col">
                            <p className="not-found-title black-text">404!</p>
                            <p className="text-med text-uppercase letter-spacing-2">
                                The page you were looking<br /> for could not be found.
                            </p>
                            <a className="highlight-button-dark btn btn-small no-margin-right" href="/">
                                Go to home page
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 col-sm-8 col-xs-11 center-col">
                            <img src="images/404.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}