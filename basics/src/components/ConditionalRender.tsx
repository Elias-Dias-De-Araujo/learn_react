import React, { useState } from "react";

function ConditionalRender() {
    const [x] = useState(true);
    const [name] = useState("Jon");
    return (
        <div>
            <h1>Is this will be shown?</h1>
            {x && <p>Yes</p>}
            {!x && <p>No</p>}
            {name == "Jon" ? (
                <div>
                    <p>name is Jon</p>
                </div>
            ) : (
                <div>
                    <p>name not found</p>
                </div>
            )}
        </div>
    );
}

export default ConditionalRender;
