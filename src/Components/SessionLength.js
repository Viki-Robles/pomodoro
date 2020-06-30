import React from "react";

export default function SessionLength({ sessionLength }) {
    return (
        <>
            <div className="sessionLength-container">
                <button>Up</button>
                <p>{sessionLength}</p>
                <button>Down</button>
            </div>
        </>
    );
}