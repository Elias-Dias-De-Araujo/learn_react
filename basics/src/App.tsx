import { useState } from "react";

import Zetong from "./assets/zetong-li-aySBWg11160-unsplash.jpg";

import "./App.css";

function App() {
    return (
        <>
            <h1>Landscapes</h1>
            <div>
                <img
                    width={500}
                    height={500}
                    src="alexander-nRuPY_8fvrU-unsplash.jpg"
                    alt=""
                />
            </div>
            <div>
                <img width={500} height={500} src={Zetong} alt="" />
            </div>
        </>
    );
}

export default App;
