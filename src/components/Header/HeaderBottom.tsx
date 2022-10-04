import { Row, Col } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const HeaderBottom: React.FC = () => {
    const navigate = useNavigate()
    return (
        <Row>
            <Col lg={24} id='headerBottom'>
                <div className="container">
                    <Row>
                        <Col lg={5} >
                            <h4 className="headerBottomMenu" onClick={() => navigate(`/`)} >
                                <span><i className="fa-solid fa-bars"></i></span>
                                <span className="title">Shop By Department</span>
                            </h4>
                        </Col>
                        <Col lg={11}>
                            <ul className="hedaerBottomNav">
                                <li><a href="_">HOME&nbsp;&nbsp;<i className="fa-solid fa-chevron-down"></i></a></li>
                                <li><a href="_">SHOP&nbsp;&nbsp;<i className="fa-solid fa-chevron-down"></i></a></li>
                                <li><a href="_">PAGE&nbsp;&nbsp;<i className="fa-solid fa-chevron-down"></i></a></li>
                                <li><a href="_">BLOG&nbsp;&nbsp;<i className="fa-solid fa-chevron-down"></i></a></li>
                                <li><a href="_">ABOUT&nbsp;&nbsp;<i className="fa-solid fa-chevron-down"></i></a></li>
                                <li><a href="_">CONTACT US&nbsp;&nbsp;<i className="fa-solid fa-chevron-down"></i></a></li>
                            </ul>
                        </Col>
                        <Col lg={8} className="headerBottomMeta">
                            <span>Spend $120 more and get free shipping!</span>
                        </Col>
                    </Row>
                </div>
                <div className="headerBottomLine"></div>
            </Col>
        </Row>
    )
}

export default HeaderBottom;
