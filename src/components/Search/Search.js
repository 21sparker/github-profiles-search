import React, { useState } from "react";
import styles from "./Search.module.css";
import User from "../User/User";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState({ element: <div style={{display: "none"}} />});

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({element: <User username={username}/>})
    };

    return (
        <div className={styles["container"]}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Github Username" onChange={e => setUsername(e.target.value)} required={true} />
                <button type="submit">Search</button>
            </form>
            {user.element}
        </div>
    );
}

export default Search;