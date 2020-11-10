import React from 'react';
import { Container } from 'reactstrap';


export default class Offerings extends React.Component {
    render() {
        return (
            <section className="offerings section-small">
                <Container fluid className="text-center">
                    <h1 className="title">Demos</h1>
                    <p className="content">Sections from different demos can be mixed and combined.</p>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="teaser bg-shadow bg-pastel teaser-caption">
                                <h4>TVC</h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="teaser bg-shadow bg-pastel teaser-caption">
                                <h4>Digital <span className="light">Films</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="teaser bg-shadow bg-pastel teaser-caption">
                                <h4>Product <span className="light">Films</span></h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="teaser bg-shadow bg-pastel teaser-caption">
                                <h4>TV <span className="light">Shows</span></h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="teaser bg-shadow bg-pastel teaser-caption">
                                <h4>Animation</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="teaser bg-shadow bg-pastel teaser-caption">
                                <h4>Brand <span className="light">Films</span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="teaser bg-shadow bg-pastel teaser-caption">
                                <h4>Government <span className="light">Films</span></h4>
                            </div>
                        </div>
                    </div>
                </Container>
            </section >
        )
    }
}