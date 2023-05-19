import React, { useState } from "react";

const ListRender = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "Mike", age: 50 },
        { id: 2, name: "Walter", age: 55 },
        { id: 3, name: "Jesse", age: 23 },
        ,
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        // Aqui eu consigo os dados dos users antes da alteração, ou seja a versão atual.
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user?.id);
        });
    };

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user?.id}>{user?.name}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete name</button>
        </div>
    );
};

export default ListRender;
