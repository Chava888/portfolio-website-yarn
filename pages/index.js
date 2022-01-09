import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import TechnologiesList from '../src/components/TechnologiesList'





export default function Home() {
  return (
    <div id={styles.wrapper}>
      <Header />
      <TechnologiesList />
      <div className={styles.container}>
        <h1 id={styles.welcome}>WELC😃ME</h1>
        <h2 id={styles.description}>Hi am a developer to help you on your next project!</h2>
      </div>
      {/* <img src="/images/Davis.jpg" alt="Davis Picture" /> */}
      <Navbar />
      <Footer />
    </div>
  )
}