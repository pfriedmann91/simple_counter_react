import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {

    const [digito1, setDigito1] = useState(0);
    const [digito2, setDigito2] = useState(0);
    const [digito3, setDigito3] = useState(0);
    const [digito4, setDigito4] = useState(0);
    const [digito5, setDigito5] = useState(0);
    const [digito6, setDigito6] = useState(0);

    const [secondsCounter, setsecondsCounter] = useState(false);

    useEffect(() => {
        let intervalId = null;

        if (secondsCounter) {
            intervalId = setInterval(() => {
                setDigito1((prev) => {
                if (prev < 9) return prev + 1;
                    setDigito2((prev) => {
                        if (prev < 9) return prev + 1;
                setDigito3((prev) => {
                    if (prev < 9) return prev + 1;
                setDigito4((prev) => {
                    if (prev < 9) return prev + 1;
                setDigito5((prev) => {
                    if (prev < 9) return prev + 1;
                setDigito6((prev) => (prev < 9 ? prev + 1 : 0));
                return 0;
            });
                 return 0;
                });
                return 0;
                });
                return 0;
                });
                return 0;
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [secondsCounter]);

    return (
        <div className="container-fluid text-center">
            <div className="row d-flex justify-content-center align-items-center pt-3">
                <div className="col-1">{digito6}</div>
                <div className="col-1">{digito5}</div>
                <div className="col-1">{digito4}</div>
                <div className="col-1">{digito3}</div>
                <div className="col-1">{digito2}</div>
                <div className="col-1">{digito1}</div>
            </div>
            <div className="mt-4">
                <button className="btn btn-success mt-3" onClick={() => setsecondsCounter(true)}>Start</button>
                <button className="btn btn-warning mt-3" onClick={() => setsecondsCounter(false)}>Stop</button>
            </div>
        </div>
    );
};

export default Home;

