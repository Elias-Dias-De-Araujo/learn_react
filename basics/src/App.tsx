import { useState } from "react";

// components
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import TitleNames from "./components/TitleNames";
import Container from "./components/Container";
import Message from "./components/Message";
import ChangeMsgState from "./components/ChangeMsgState";

// assets
import Zetong from "./assets/zetong-li-aySBWg11160-unsplash.jpg";

import "./App.css";

function App() {
    const name = "Mountain";

    const [titles, setTitles] = useState([
        { id: 1, name: "Text1", subtitle: "text1" },
        { id: 2, name: "Text2", subtitle: "text2" },
        { id: 3, name: "Text3", subtitle: "text3" },
        ,
    ]);

    const showMessage = () => {
        console.log("Component");
    };

    const [msg, setMsg] = useState("");

    const handleMessage = (msg: any) => {
        setMsg(msg);
    };

    return (
        <>
            <h1>Landscapes</h1>
            <ManageData />
            <ListRender />
            <ConditionalRender />
            {titles.map((t) => (
                <TitleNames key={t?.id} name={t?.name} subtitle={t?.subtitle} />
            ))}
            <Container>
                <p>Container content</p>
            </Container>
            <Message msg={msg} />
            <ChangeMsgState handleMessage={handleMessage} />
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
