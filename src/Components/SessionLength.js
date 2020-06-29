import React from "react";

export default function SessionLength({ sessionLength }) {
    return (
        <>
            <p>
                <button>Up</button>
                <p>{sessionLength}</p>
                <button>Down</button>
            </p>
        </>
    );
}