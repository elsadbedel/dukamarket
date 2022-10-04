import { Col, Row } from 'antd'
import React from 'react'

const FooterMiddle: React.FC = () => {
    return (
        <Row>
            <Col lg={24} id='footerMiddle'>
                <div className="container">
                    <Row gutter={[16, 8]}>
                        <Col lg={4}>
                            <aside>
                                <h3 className='footerMiddleTitle'>Help & Customer Care</h3>
                                <div>
                                    <ul className='footerMenu'>
                                        <li>
                                            <a href="_">Laptop & Computer</a>
                                        </li>
                                        <li>
                                            <a href="_">Speaker & Audio</a>
                                        </li>
                                        <li>
                                            <a href="_">Cellphone</a>
                                        </li>
                                        <li>
                                            <a href="_">Video Game</a>
                                        </li>
                                        <li>
                                            <a href="_">Accessories</a>
                                        </li>
                                        <li>
                                            <a href="_">Delivery & Dispatch</a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col lg={4}>
                            <aside>
                                <h3 className='footerMiddleTitle'>My Account</h3>
                                <div>
                                    <ul className='footerMenu'>
                                        <li>
                                            <a href="_">Search</a>
                                        </li>
                                        <li>
                                            <a href="_">Product Support</a>
                                        </li>
                                        <li>
                                            <a href="_">Checkout</a>
                                        </li>
                                        <li>
                                            <a href="_">Shopping Cart</a>
                                        </li>
                                        <li>
                                            <a href="_">Wishlist</a>
                                        </li>
                                        <li>
                                            <a href="_">New Arrivals</a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col lg={4}>
                            <aside>
                                <h3 className='footerMiddleTitle'>Quick Links</h3>
                                <div>
                                    <ul className='footerMenu'>
                                        <li>
                                            <a href="_">Store Location</a>
                                        </li>
                                        <li>
                                            <a href="_">My Account</a>
                                        </li>
                                        <li>
                                            <a href="_">Orders Tracking</a>
                                        </li>
                                        <li>
                                            <a href="_">FAQs</a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col lg={4}>
                            <aside>
                                <h3 className='footerMiddleTitle'>Customer Service</h3>
                                <div>
                                    <ul className='footerMenu'>
                                        <li>
                                            <a href="_">Help Center</a>
                                        </li>
                                        <li>
                                            <a href="_">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="_">Report Abuse</a>
                                        </li>
                                        <li>
                                            <a href="_">Submit a Dispute</a>
                                        </li>
                                        <li>
                                            <a href="_">Policies & Rules</a>
                                        </li>
                                        <li>
                                            <a href="_">Online Shopping</a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col lg={8}>
                            <aside>
                                <h3 className='footerMiddleTitle'>About The Store</h3>
                                <p>Our mission statement is to provide the absolute best customer experience available in the Electronic industry without exception.</p>
                                <div className='phone'>
                                    <i className="fa-solid fa-headphones-simple"></i>
                                    <span>Got Question? Call us 24/7!</span>
                                    <span><a href="tel:+001%20123%20456%20789">+001 123 456 789</a></span>
                                </div>
                                <p>Add: Walls Street 68, Mahattan, New York, USA</p>
                                <p>Mail: alothemes@gmail.com</p>
                            </aside>
                        </Col>
                    </Row>
                    <div className="line"></div>
                </div>
            </Col>
        </Row>
    )
}

export default FooterMiddle
