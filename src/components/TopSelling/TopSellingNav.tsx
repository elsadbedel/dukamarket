import React from "react";

const TopSellingNav: React.FC = () => {
    return (
        <div className="container">
            <div className="topSellingSection ">
                <h1 className="topSellingSectionTitle">Top Selling Products</h1>
                <div className="topSellingWrap">
                    <ul>
                        <li>
                            <a href="_" className="active" >
                                <span>Laptop</span>
                                <span>&amp;</span>
                                <span>Computer</span>
                            </a>
                        </li>
                        <li>
                            <a href="_"  >
                                <span>Cellphone</span>
                            </a>
                        </li>
                        <li>
                            <a href="_" >
                                <span>Speaker</span>
                                <span>&amp;</span>
                                <span>Audio</span>
                            </a>
                        </li>
                        <li>
                            <a href="_" >
                                <span>Video</span>
                                <span>Game</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopSellingNav;
