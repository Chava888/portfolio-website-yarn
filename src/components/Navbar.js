// import Link from "next/link"
import styles from "./navbar.module.css"
import MenuBarIcon from "./MenuBarIcon"
import useToggle from "./hooks/useToggle"
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//Import route components



function Navbar() {

    //Calls the toggle hook
    const [isList, toggleList] = useToggle(true);

    return (
        <nav className={styles.container}>

            <div id={styles.menuIcon} onClick={toggleList} ><MenuBarIcon /></div>
            <div id={styles.name}> Salvador Portfolio</div>

            <ul className={styles.nav}>
                <li className={styles.labels} >
                    <Link to="/" className={styles.nameLabel}>Home</Link>
                </li>
                <li className={isList ? styles.hide.concat(" ", styles.labels) : styles.labels}>
                    <Link to="/About" className={styles.nameLabel}>About</Link>
                </li>
                <li className={isList ? styles.hide.concat(" ", styles.labels) : styles.labels}>
                    <Link to="/Portfolio" className={styles.nameLabel}>Portfolio</Link>
                </li>
                <li className={isList ? styles.hide.concat(" ", styles.labels) : styles.labels}>
                    <Link to="/Blog" className={styles.nameLabel}>Blog</Link>
                </li>
                <li className={isList ? styles.hide.concat(" ", styles.labels) : styles.labels}>
                    <Link to="/Contact" className={styles.nameLabel}>Contact</Link>
                </li>
            </ul>

        </nav >
    )
}

export default Navbar