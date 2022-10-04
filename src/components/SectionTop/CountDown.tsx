import React, { useState, useEffect } from "react";

const CountDown: React.FC = () => {

    let duration = 96 * 24 * 60 * 60 * 1000 // total Time
    const [time, setTime] = useState(duration);
    setTimeout(() => {
        return setTime(time - 1000);

    }, 1000);
    useEffect(() => {
    }, [time]);

    let totalSeconds = Number(Math.floor(time / 1000));
    let totalMinutes = Number(Math.floor(totalSeconds / 60));
    let totalHours = Number(Math.floor(totalMinutes / 60));
    let days = Number(Math.floor(totalHours / 24));

    let seconds = Number(totalSeconds % 60);
    let minutes = Number(totalMinutes % 60);
    let hours = Number(totalHours % 24);

    return (
        <div className="container">
            <div className="countdownSection ">
                <h1 className="sectionTitle">Top Deals Of The Day</h1>
                <div className="countdownWrap">
                    <div className="countdownLabel ">Hurry Up! Offer ends in: </div>
                    <div className="countdown">
                        <span className="boxCount day"><span className="number"><b>{days}</b></span> <span className="text">Days</span></span>
                        <span className="boxCount hrs"><span className="number"><b>{hours}</b></span> <span className="text">Hrs</span></span>
                        <span className="boxCount min"><span className="number"><b>{minutes}</b></span> <span className="text">Mins</span></span>
                        <span className="boxCount secs"><span className="number"><b>{seconds}</b></span> <span className="text">Secs</span></span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CountDown;
