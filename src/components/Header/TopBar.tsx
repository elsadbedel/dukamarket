import { Row, Col, Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from "@ant-design/icons";

import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store';
import { logOut } from '../../features/UserSlice';

const TopBar: React.FC = () => {
    const user = useAppSelector(state => state.users.users.filter(elem => elem.onsite === true))
    const dispatch = useAppDispatch();

    const loginOut = () => {
        user.forEach(element => {
            dispatch(logOut(element))
        });
    }

    const money = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="_">
                            USD
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="_">
                            EUR
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="_">
                            RUB
                        </a>
                    ),
                },
            ]}
        />
    );
    const language = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="_">
                            <img style={{ width: '15px' }} src="https://cdn.shopify.com/s/files/1/0606/6867/4281/t/31/assets/flag_en.png?v=14076981825125011091660195027" alt="en" /> EN
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="_">
                            <img style={{ width: '15px' }} src="//cdn.shopify.com/s/files/1/0606/6867/4281/t/31/assets/flag_ar.png?v=87171907108583701081660195025" alt="" /> AR
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="_">
                            <img style={{ width: '15px' }} src="//cdn.shopify.com/s/files/1/0606/6867/4281/t/31/assets/flag_de.png?v=69801997571936479461660195029" alt="" />  DE
                        </a>
                    ),
                },
            ]}
        />
    );

    return (
        <Row>
            <Col lg={24} id='topBar'>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <ul className='topBarMenu'>
                                <li className='money'>
                                    <Dropdown overlay={money} placement="bottomLeft">
                                        <Button>
                                            GBP
                                            <DownOutlined />
                                        </Button>
                                    </Dropdown>|
                                </li>
                                <li className='menuLanguage'>
                                    <Dropdown overlay={language} placement="bottomLeft">
                                        <Button>
                                            <img className='languageFlag' src="https://cdn.shopify.com/s/files/1/0606/6867/4281/t/31/assets/flag_en.png?v=14076981825125011091660195027" alt="en" />
                                            &nbsp;EN
                                            <DownOutlined />
                                        </Button>
                                    </Dropdown>
                                </li>
                                <li className='needHelp'>
                                    Need Help? &nbsp; <a href="_">+001 123 456 789</a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={12}>
                            <ul className="topContact">
                                {user.length > 0 ? <li className="contact-item" onClick={loginOut}><span>Log out</span></li> : <li className="contact-item" ><span>My account</span></li>}
                                <li className="contact-item"><span >About Us</span></li>
                                <li className="contact-item"><span >Contact Us</span></li>
                                <li className="contact-item"><span >FAQs</span></li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default TopBar;
