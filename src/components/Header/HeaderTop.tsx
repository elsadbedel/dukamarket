import { Col, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { showAddToCart, showLogin, showWishList } from '../../features/ModalSlice';
import { useAppDispatch, useAppSelector } from '../../store';

const HeaderTop: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();

    const user = useAppSelector(state => state.users.users.filter(elem => elem.onsite === true))

    var userName = ''
    user.forEach(element => {
        userName = element.username
    });

    const wishCount = useAppSelector(state => state.users.wishlist.length)
    const cartCount = useAppSelector(state => state.users.cart.length)
    const cart = useAppSelector((state) => state.users.cart)
    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })
        return { totalPrice, totalQuantity }
    }
    return (
        <Row>
            <Col lg={24} id='headerTop'>
                <div className="container">
                    <Row align='middle'>
                        <Col lg={5}>
                            <div className="headerLogo">
                                <span onClick={() => navigate(`/`)}  >
                                    <img src="https://cdn.shopify.com/s/files/1/0606/6867/4281/files/logo_200x@2x.png?v=1635821932" alt="logo" />
                                </span>
                            </div>
                        </Col>
                        <Col lg={10}>
                            <div className="formHeaderSearch">
                                <select name="productType" className='productType'>
                                    <option value="*">All Categories</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Basketball">Basketball</option>
                                    <option value="customise">customise</option>
                                    <option value="Decor">Decor</option>
                                    <option value="Dining &amp; Kitchen">Dining &amp; Kitchen</option>
                                    <option value="Exercise">Exercise</option>
                                    <option value="Girls">Girls</option>
                                    <option value="Lifestyle">Lifestyle</option>
                                    <option value="Lighting">Lighting</option>
                                    <option value="Living Room">Living Room</option>
                                    <option value="Office Furniture">Office Furniture</option>
                                    <option value="Outdoor &amp; Gift">Outdoor &amp; Gift</option>
                                    <option value="Running">Running</option>
                                    <option value="Sectional Sofas">Sectional Sofas</option>
                                    <option value="Tables &amp; Chair">Tables &amp; Chair</option>
                                    <option value="Top Selling">Top Selling</option>
                                    <option value="Training">Training</option>
                                </select>
                                <input type="text" className='headerSearchInput' />
                                <button type='submit' className='headerSearchSubmit'><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="headerTopMeta">
                                <ul >
                                    <li className="signin" onClick={() => { dispatch(showLogin(true)) }}>
                                        <span>
                                            <i className="fa-regular fa-user"></i>
                                            <span className='_login'>{userName.length > 0 ? userName : 'Login'}</span>
                                            <span>Login/Register</span>
                                        </span>
                                    </li>
                                    <li className="wishList" onClick={() => { dispatch(showWishList(true)) }} >
                                        <span>
                                            <i className="fa-regular fa-heart"></i>
                                            <div className='headerCounter'>{wishCount}</div>
                                            <span className='_wishList'>Favorite</span>
                                            <span>My wishlist</span>
                                        </span>
                                    </li>
                                    <li className="yourCart" onClick={() => { dispatch(showAddToCart(true)) }}>
                                        <span >
                                            <i className="fa-solid fa-bag-shopping"></i>
                                            <div className='headerCounter'>{cartCount}</div>
                                            <span className='_cart'>Your Cart:</span>
                                            <span>${getTotal().totalPrice}</span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <div className="headerTopLine"></div>
                </div>
            </Col>
        </Row>
    )
}

export default HeaderTop;
