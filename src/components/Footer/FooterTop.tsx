import { Col, Row } from 'antd';
import React from 'react';

const FooterTop: React.FC = () => {
    return (
        <Row >
            <Col lg={24} id='footerTop'>
                <div className="container">
                    <Row gutter={[16, 8]}>
                        <Col lg={8}>
                            <aside>
                                <h3 className='footerTopTitle'>Follow Us</h3>
                                <div>
                                    <p className='content'>We make consolidating, marketing and tracking your social
                                        media website easy.</p>
                                </div>
                                <div>
                                    <ul className='footerSocial'>
                                        <li className='twitter'>
                                            <a href="_blank" title='twitter'><i className="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li className='facebook'>
                                            <a href="_blank" title='facebook'>
                                                <i className="fa-brands fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className='pinterest'>
                                            <a href="_blank" >
                                                <i className="fa-brands fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                        <li className='instagram'>
                                            <a href="_blank">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li className='youtube'>
                                            <a href="_blank">
                                                <i className="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>

                        <Col lg={8}>
                            <aside>
                                <h3 className='footerTopTitle'>Sign Up To Newsletter</h3>
                                <div>
                                    <p className='content'>Join 60.000+ subscribers and get a new discount coupon
                                        on every Saturday.
                                    </p>
                                </div>
                                <div className='subscribe'>
                                    <input type="text" placeholder='Your email adress...' />
                                    <button>SUBSCRIBE</button>
                                </div>
                            </aside>
                        </Col>
                        <Col lg={8}>
                            <aside>
                                <h3 className='footerTopTitle'>Download App</h3>
                                <div>
                                    <p className='content'>Dukamarket App is now available on App Store & Google Play. Get it now.</p>
                                </div>
                                <div>
                                    <a href="_"> <img src="//cdn.shopify.com/s/files/1/0606/6867/4281/files/img-foter1_181x45.png?v=1636689430" alt="app store" /></a>
                                    <a href="_"> <img src="//cdn.shopify.com/s/files/1/0606/6867/4281/files/img-foter2_181x45.png?v=1636689443" alt="google play" /></a>
                                </div>
                            </aside>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default FooterTop
