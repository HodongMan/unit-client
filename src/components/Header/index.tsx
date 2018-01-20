import * as React from 'react';

export default class Header extends React.PureComponent<{}, {}> {

    render() {
        return(
            <div className="intro-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="intro-message">
                                <h1 />
                                <h3 />
                                <hr className="intro-divider" />
                                <ul className="list-inline intro-social-buttons" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}