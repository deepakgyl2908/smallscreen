import Footer from '../components/footer';
import Header from '../components/header/header';
import IntroVideo from '../components/introVideo/introVideo';
import Offerings from '../components/offerings/offerings';
import HomePageTeaser from '../components/teaser/homePage';
import Slider from "react-slick";
import { Container } from 'reactstrap';

function HomePage() {

    var customersettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    var awardssettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return <div className="home">
        <Header />
        <IntroVideo />
        <HomePageTeaser />
        <Offerings />
        <section className="section-small">
            <div className="container text-center box-shadow offcet showcase">
                <div className="row v-center">
                    <div className="col-lg-6 no-pad"><img className="img-responsive center-block" src="/img/48.jpg" alt="" /></div>
                    <div className="col-lg-6">
                        <h2 className="title">Subscribe</h2>
                        <p>
                            <form className="form-inline subscribe-form" id="mc-embedded-subscribe-form" action="" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate="">
                                <div className="input-group input-group-lg">
                                    <input className="form-control" id="mce-EMAIL" type="email" name="EMAIL" placeholder="Email address..." />
                                    <span className="input-group-btn" style={{ zIndex: 9 }}>
                                        <button className="btn btn-dark subscribe" id="mc-embedded-subscribe" type="submit" name="subscribe" >Subscribe</button>
                                    </span>
                                    <div id="mce-responses"></div>
                                </div>
                            </form>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="section-small" style={{ background: "#eee" }}>
            <Container fluid className="text-center">
                <h1 className="title">Our Success Stories</h1>
                <p className="content">Sections from different demos can be mixed and combined.</p>
                <div>
                    <Slider {...customersettings}>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
        <section className="section-small">
            <Container fluid className="text-center">
                <h1 className="title">Our Awards</h1>
                <p className="content">Sections from different demos can be mixed and combined.</p>
                <div>
                    <Slider {...awardssettings}>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                        <div>
                            <img src="/img/customers/fake.jpg" />
                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
        <Footer />
    </div>
}

export default HomePage