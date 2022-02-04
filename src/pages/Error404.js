import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Routes, Route, Link } from "react-router-dom";
import styles from '../styles/Error404.module.css'




export default function Error404() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h2 >Error 404 - You are lost, click below</h2>
                    <h2 id={styles.linkToHome}><Link to="/" className={styles.nameLabel}>Link to Home</Link></h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}
