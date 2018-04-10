import * as React from 'react';

export default class IndexImageList extends React.PureComponent<{}, {}> {

    render() {
        return (
            <section id="blog" className="wow fadeIn">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="section-title">project</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-duration="300ms">
                            <div className="blog-post">
                                <div className="blog-post-images">
                                    <a href="/">
                                        <img src="images/bg_img01.png" alt="" />
                                    </a>
                                </div>
                                <div className="post-details">
                                    <a href="/" className="post-title">Standard post with picture</a>
                                    <span className="post-author sm-margin-bottom-three sm-margin-top-three">
                                        Posted by <a href="/">Michael Freemon</a> | 10 January 2015
                                    </span>
                                    <p className="width-90">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-duration="600ms">
                            <div className="blog-post">
                                <div className="blog-post-images">
                                    <a href="/">
                                        <img src="http://placehold.it/800x500" alt="" />
                                    </a>
                                </div>
                                <div className="post-details">
                                    <a href="/" className="post-title">
                                        Post with featured picture
                                    </a>
                                    <span className="post-author sm-margin-bottom-three sm-margin-top-three">
                                        Posted by <a href="/">Colin Powell</a> | 02 January 2015
                                    </span>
                                    <p className="width-90">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 wow fadeInUp" data-wow-duration="900ms">
                            <div className="blog-post">
                                <div className="blog-post-images">
                                    <a href="blog-single-full-width.html">
                                        <img src="http://placehold.it/800x500" alt="" />
                                    </a>
                                </div>
                                <div className="post-details">
                                    <a href="/" className="post-title">Standard post with slider</a>
                                    <span className="post-author sm-margin-bottom-three sm-margin-top-three">
                                        Posted by <a href="/">Vince Lombardi</a> | 02 January 2015
                                    </span>
                                    <p className="width-90">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center wow fadeInUp" data-wow-duration="1200ms">
                            <a className="btn btn-black btn-small margin-four no-margin-bottom" href="/">
                                View All Blog
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}