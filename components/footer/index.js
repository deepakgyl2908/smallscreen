import React from 'react';
import { Col, Container, Row } from 'reactstrap';

export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section class="section-small bg-gray2 action">
                    <Container>
                        <Row>
                            <Col class="col-md-3">
                                <h2 class="no-pad color-white">Have an idea?</h2>
                            </Col>
                            <Col md={{ size: 4, offset: 1 }}>
                                <p class="no-pad color-white">Concept is a unique template for building beautiful business website.</p>
                            </Col>
                            <Col md={{ size: 2, offset: 1 }}><a class="btn btn-dark btn-lg" href="/">Get Started</a></Col>
                        </Row>
                    </Container>
                </section>
                <section className="bg-black footer">
                    <div className="text-center">
                        <div className="row">
                            <div className="col-lg-4">
                                <ul class="list-inline no-pad">
                                    <li><a href="/"><i class="fab fa-twitter fa-fw fa-lg"></i></a></li>
                                    <li><a href="/"><i class="fab fa-facebook-f la-fw fa-lg"></i></a></li>
                                    <li><a href="/"><i class="fab fa-youtube fa-fw fa-lg"></i></a></li>
                                    <li><a href="/"><i class="fab fa-vimeo-v fa-fw fa-lg"></i></a></li>
                                    <li><a href="/"><i class="fab fa-github-alt fa-fw fa-lg"></i></a></li>
                                    <li><a href="/"><i class="fab fab fa-linkedin-in fa-fw fa-lg"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="no-pad">
                                    <img src="/img/logo.png" className="footer-logo" />
                                </h5>
                            </div>
                            <div className="col-lg-4">
                                <h5 className="no-pad">
                                    Contact Address Line 1<br />
                                Contact Address Line 2<br />
                                Contact Details
                            </h5>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </section >
            </React.Fragment>
        )
    }
}