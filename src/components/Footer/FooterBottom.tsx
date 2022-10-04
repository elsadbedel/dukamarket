import { Col, Row } from 'antd';
import React from 'react'

const FooterBottom: React.FC = () => {
    return (
        <Row>
            <Col lg={24} id='footerBottom'>
                <div className="container">
                    <Row justify='center'>
                        <div className="customLink">
                            <p><a href="_" >Online Shopping </a> /  <a href="_" >Promotions</a>  /  <a href="_" >My Orders</a>  /  <a href="_" >Help</a>  /  <a href="_" >Customer</a> / <a href="_" >Service</a>  /  <a href="_" >Support</a>  /  <a href="_" >Most Populars</a>  /  <a href="_" >New Arrivals</a>  /  <a href="_" >Special Products</a>  /  <a href="_" >Manufacturers</a></p>
                            <p><a href="_" >Our Stores</a>  /  <a href="_" >Shipping  </a>/  <a href="_" >Payments  </a>/  <a href="_" >Checkout  </a>/  <a href="_" >Discount</a>  /  <a href="_" >Terms &amp; Conditions</a>  /  <a href="_" >Policy Shipping</a>  /  <a href="_" >Returns</a>  /  <a href="_" >Refunds</a></p>
                        </div>
                        <div className="footerPaypal"> <img src="//cdn.shopify.com/s/files/1/0606/6867/4281/files/payment_325x29.png?v=1636700714" alt="Payment" /> </div>
                        <div className="CopyRight"> <h3 className="content">Copyright © <a href="_">Dukamarket.</a> all rights reserved. Powered by <a href="_">alothemes.</a></h3> </div>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default FooterBottom; 
