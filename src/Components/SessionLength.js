import React from "react";

export default function SessionLength({ sessionLength }) {
    return (
        <>
            <div>
                <h4 className="session-length-title">Session Length</h4>
                <div className="sessionLength-container">
                    <button>Up</button>
                    <p>{sessionLength}</p>
                    <button>Down</button>
                </div>
            </div>

        </>
    );
}