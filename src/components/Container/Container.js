import React from "react";
import styles from "./Container.module.css";
import Search from "../Search/Search";

const Container = () => {
    return (
        <div className={styles["container"]}>
            <Search />
        </div>
    )
}

export default Container;