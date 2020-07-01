import React from "react";

export default function BreakSession({ breakSession }) {

    return (
        <div className="breakSession">
            <button>Go up</button>
            <div className="breakInterval-text">{breakSession}</div>
            <button>Go Down</button>
        </div>
    );
}