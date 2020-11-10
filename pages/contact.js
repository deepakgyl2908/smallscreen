import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header/header';

export default class ContactPage extends React.Component {
    render() {
        return (
            <div className="contact-us">
                <Header pagetype="inner" />
                <div class="small-header bg-gray2 menu-spacer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 className="color-white">Contact Us</h3>
                            </div>
                            <div class="col-md-6 text-right">
                                <h6 class="breadcrumb"><a href="/">Home</a>&nbsp;/&nbsp;Contact Us</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="section-small" id="contact2">
                    <div class="container wow fadeIn">
                        <div class="row">
                            <div class="col-md-4">
                                <h2 className="title">Say hello</h2>
                                <p>We have a dedicated support team ready to answer your questions.</p>
                            </div>
                            <div class="col-md-8">
                                <h2 className="title">Contact us</h2>
                                <p>Feel free to contact us to provide some feedback on our templates, give us suggestions for new
                        templates and themes, or to just say hello!</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <p><i class="fa fa-phone la-fw la-lg"></i> (123) 456-7890 <br /> <i
                                    class="fa fa-envelope la-fw la-lg"></i> info@youwebsite.com <br /> <i
                                        class="fa fa-map-marker la-fw la-lg"></i> 2345 Some Avenue, New York
                                </p>
                                <hr />
                                <form id="contactForm" name="sentMessage" novalidate="">
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls">
                                            <label class="sr-only control-label" for="name">You Name</label>
                                            <input class="form-control input-lg" id="name" type="text" placeholder="You Name"
                                                required="" data-validation-required-message="Please enter name" /><span
                                                    class="help-block text-danger"></span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls">
                                            <label class="sr-only control-label" for="email">You Email</label>
                                            <input class="form-control input-lg" id="email" type="email" placeholder="You Email"
                                                required="" data-validation-required-message="Please enter email" /><span
                                                    class="help-block text-danger"></span>
                                        </div>
                                    </div>
                                    <div class="control-group">
                                        <div class="form-group floating-label-form-group controls">
                                            <label class="sr-only control-label" for="message">Message</label>
                                            <textarea class="form-control input-lg" id="message" rows="2" placeholder="Message"
                                                required="" data-validation-required-message="Please enter a message."
                                                aria-invalid="false"></textarea><span class="help-block text-danger"></span>
                                        </div>
                                    </div>
                                    <div id="success"></div>
                                    <button class="btn btn-dark btn-lg" type="submit">Send</button>
                                </form>
                            </div>
                            <div class="col-md-8">
                                <div id="map"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}