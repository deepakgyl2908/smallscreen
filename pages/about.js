import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header/header';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="about-page">
                <Header pagetype="inner" />
                <div class="small-header bg-gray2 menu-spacer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <h3 className="color-white">About Us</h3>
                            </div>
                            <div class="col-md-6 text-right">
                                <h6 class="breadcrumb"><a href="/">Home</a>&nbsp;/&nbsp;Team</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="section-small" id="news-single">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>There's something about Small Screen, but since we don't like to show off, let us tell you what we're not...</p>
                                        <p>We're not a pure play production house. Why? Because we like to think beyond just production... and add value. Need an end-to-end solution from creatives to distribution? Call us! The ideas, strategy, and content specialists.</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <img src="/img/48.jpg" />
                                    </div>
                                    <div class="col-md-6">
                                        <img src="img/48.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <p>We're not limited to any genre. Long format award winning shows for leading TV channels - check. Digital content with a <b>150 million views</b> - check. Factual, fictional, branded content - check, check, check!</p>
                                        <p>We're not newbies. We've been around for more than 20 years. But we're not limited to the grey matter or grey hair of the partners (link to partners below). We have a young and dynamic team of in-house directors, producers, writers, editors and graphics (or animation).</p>
                                        <p>We're not a pop & pop shop. We're an organisation. The team doesn't comprise of rookies either (and we're proud to say that we have a particularly low attrition rate). These are seasoned professionals who are at the top of their game. And we've grabbed a few awards (link to awards page?) along the way to show that. We're not local. We have a pan India network of the best professionals in the country whom we collaborate with. Did we say organisation already?</p>
                                        <p>We're not vendors in the pejorative sense of the word that it often stands for. We like to partner with our clients. We sink our teeth into our projects and take ownership, so your stress is reduced. We won't shy from arguing with you if it benefits the product. In the end you'll appreciate it. We didn't say it. <b>They</b> did. (link to testimonials of a couple of clients??)</p>
                                        <p>So if you think we've showed off enough by telling you (in a classy kind of way) what we're not, rest assured we can make your content show off for you too!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}