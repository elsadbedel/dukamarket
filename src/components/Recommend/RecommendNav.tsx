import React from "react";

const RecommendNav: React.FC = () => {
    return (
        <div className="container">
            <div className="recommendHead ">
                <div className="recommendTitle">
                    <h1 >Recommended For You</h1>
                </div>
                <div className="seeAllBtn">
                    <a href="_">View All Products</a>
                </div>
            </div>
        </div>
    );
};

export default RecommendNav;
