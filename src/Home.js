import styles from './styles/Home.module.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TechnologiesList from './components/TechnologiesList'
import * as React from "react";


export default function Home() {
    return (
        <div id={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 id={styles.welcome}>Salvador Tena</h1>
                    <p id={styles.description}>Hi, I am a full stack developer 💻 <br></br> Let's talk about your next project!</p>
                </div>
            </div>
            <TechnologiesList />
            <Navbar />
            <Footer />
        </div>
    )
}