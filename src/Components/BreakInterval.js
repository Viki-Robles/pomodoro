import React from "react";

export default function BreakInterval({ breakInterval }) {

    return (
        <div>
            <h4>Break Length</h4>
            <div className="breakInterval">
                <button>Go up</button>
                <div className="breakInterval-text">{breakInterval}</div>
                <button>Go Down</button>
            </div>
        </div>
    );
}