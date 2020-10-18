import React from "react";
import styles from "./Header.module.css";


const Header = () => {
    return (
        <header className={styles['container']}>
            <h1 className={styles['header']}>Github Profiles Search</h1>
        </header>
    )
}

export default Header;
