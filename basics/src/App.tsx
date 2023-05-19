import { useState } from "react";

// components
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
// assets
import Zetong from "./assets/zetong-li-aySBWg11160-unsplash.jpg";

import "./App.css";

function App() {
    return (
        <>
            <h1>Landscapes</h1>
            <ManageData />
            <ListRender />
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
