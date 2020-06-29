import React, { useState } from "react";

export default function BreakInterval({ breakInterval }) {
    const [counter, setCounter] = useState(5);

    return (
        <>
            <button>Go up</button>
            <p>{breakInterval}</p>
            <button>Go Down</button>
        </>
    );
}