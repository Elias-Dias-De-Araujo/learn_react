import React from "react";

const ChangeMsgState = ({ handleMessage }) => {
    const msgs = ["Hi", "Hello", "How are you?"];
    return (
        <>
            <button onClick={() => handleMessage(msgs[0])}>Option 1</button>
            <button onClick={() => handleMessage(msgs[1])}>Option 2</button>
            <button onClick={() => handleMessage(msgs[2])}>Option 3</button>
        </>
    );
};

export default ChangeMsgState;
