import * as React from 'react';

export default class IndexDescript extends React.PureComponent<{}, {}> {

    render() {
        return(
            <section className="no-padding-bottom wow fadeIn">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-10 text-center center-col">
                        <span className="margin-five no-margin-top display-block letter-spacing-2">since. 2016</span>
                        <h1>Universal Network for Information Technology</h1>
                        <p className="text-med width-90 center-col margin-seven no-margin-bottom"> 
                            대학생 청년 IT 네트워크
                            </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid margin-five no-margin-bottom">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 bg-fast-yellow padding-three text-center">
                        <span className="text-small text-uppercase font-weight-600 black-text letter-spacing-2">
                            Web Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            Graphics &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            Magento &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            WordPress &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Applications
                        </span>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}