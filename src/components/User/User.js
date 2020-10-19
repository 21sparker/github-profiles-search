import React, { useState, useEffect } from "react";
import styles from "./User.module.css";
import { getFullMonth } from "../../utils/date-utils";


const User = ({ username }) => {
    const [found, setFound] = useState(false);
    const [user, setUser] = useState({});

    // Only get user if username prop has changed
    useEffect(() => {
        getUser(username)
    }, [username])
    
    /**
     * Makes a call to the Github API to retrive user profile data
     * @param {string} username 
     */
    async function getUser(username) {
        try {
            // Default to user as found
            setFound(true);

            // Request profile data for user from Github API
            const response = await fetch(`https://api.github.com/users/${username}`);
            response.json().then((jsonResponse) => setUser(jsonResponse));

        } catch (error) {
            console.log("Error" , error);
            setFound(false);
        }
    }

    const userInfo = (user) => {
        const created_at = new Date(user.created_at);
        const created_at_str = `${getFullMonth(created_at)} ${created_at.getDate()}, ${created_at.getFullYear()}`

        return (
            <div className={styles["container"]}>
                <img className={styles["avatar"]} src={user.avatar_url} alt="Avatar"/>
                <div className={styles["general-info"]}>
                    Name: {user.name} <br/>
                    Username: {user.login} <br/>
                    # of Repos: {user.public_repos} <br/>
                    # of Followers: {user.followers} <br/>
                    Member Since: {created_at_str} <br/>
                </div>
            </div>
        )
    }

    return (
        <>
            { ((Object.keys(user).length > 0) && found) ? userInfo(user) : null }
        </>
    )
}

export default User;