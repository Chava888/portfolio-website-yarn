import styles from './styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TechnologiesList from './components/TechnologiesList'
import * as React from "react";


export default function Home() {
    return (
        <div id={styles.wrapper}>
            <TechnologiesList />
            <div className={styles.container}>
                <h1 id={styles.welcome}>WELC😃ME</h1>
                <p id={styles.description}>Hi am a developer to help you on your next project!</p>
            </div>
            <Navbar />
            <Footer />
        </div>
    )
}