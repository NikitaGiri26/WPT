import React, { useState } from "react";

const BuggyComponent = () => {
    const [crash, setCrash] = useState(false);

    if (crash) {
        throw new Error("I crashed!");
    }

    return (
        <div>
            <h3>This component may crash</h3>
            <button onClick={() => setCrash(true)}>Trigger Error</button>
        </div>
    );
};

export default BuggyComponent;
