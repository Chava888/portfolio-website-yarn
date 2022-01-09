import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Blog.module.css'



function Blog() {
    return (
        <div>
            <Header />
            <Navbar />
            <h1 className={styles.title}>Blog Page</h1>
            <img src='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80' alt="blog photo" />
            <Footer />
        </div>
    )
}

export default Blog