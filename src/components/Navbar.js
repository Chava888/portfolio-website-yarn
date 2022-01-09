// import Link from "next/link"
import styles from "./navbar.module.css"
import MenuBarIcon from "./MenuBarIcon"
import useToggle from "./hooks/useToggle"





function Navbar() {

    //Calls the toggle hook
    const [isList, toggleList] = useToggle(true);

    return (
        <div className={styles.container}>

            <div id={styles.name}> Salvador Portfolio</div>
            <ul className={styles.nav}>
                <li className={styles.labels} id={styles.menu}>
                    <Link href="/">
                        <a className={styles.navbarAnchors} id={styles.homeTab}>Home</a>
                    </Link>
                    <div id={styles.menuIcon} onClick={toggleList} ><MenuBarIcon /></div>
                </li>
                <li className={isList ? styles.hide.concat(" ", styles.labels) : styles.labels}>
                    <Link href="/About">
                        <a className={styles.navbarAnchors}>About</a>
                    </Link>
                </li>
                <li className={isList ? styles.hide.concat(" ", styles.labels) : styles.labels}>
                    <Link href="/Portfolio">
                        <a className={styles.navbarAnchors}>Portfolio</a>
                    </Link>
                </li>
                <li className={isList ? styles.hide.concat(" ", styles.labels) : styles.labels}>
                    <Link href="/Blog">
                        <a className={styles.navbarAnchors}>Blog</a>
                    </Link>
                </li>
                <li className={isList ? styles.hide.concat(" ", styles.labels) : styles.labels}>
                    <Link href="/Contact">
                        <a className={styles.navbarAnchors}>Contact</a>
                    </Link>
                </li>


            </ul>
        </div >
    )
}

export default Navbar