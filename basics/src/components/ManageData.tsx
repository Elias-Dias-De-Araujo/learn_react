import React, { useState } from "react";

const ManageData = () => {
    const [number, setNumber] = useState(10);

    return (
        <div>
            <p>Value: {number}</p>
            <button onClick={() => setNumber(15)}>Change number</button>
        </div>
    );
};

export default ManageData;
