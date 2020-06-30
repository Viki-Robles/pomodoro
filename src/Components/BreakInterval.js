import React, { useState } from "react";

export default function BreakInterval({ breakInterval }) {

    return (
        <div className="breakInterval">
            <button>Go up</button>
            <div className="breakInterval-text">{breakInterval}</div>
            <button>Go Down</button>
        </div>
    );
}