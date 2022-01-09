import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Portfolio.module.css'
import CarouselTemplate from '../components/CarouselTemplate'
import Card from '../components/Card'
import { v4 as uuidv4 } from 'uuid'


function Portfolio() {

    //An array listing projects based on keys: name & description
    let items = [
        {
            name: <img src="/images/Davis.jpg" alt="Davis Picture" />,
            description: "First Projectcnjkcnrvkrjnvekrnver eckjewc ewkcjwefewlfjnwekfwenfw krnjfrwkndvsdfmvsoifvnsfnovnm evonvowivnwodcnsocdn3iowwcownworvinrwvownrnoivnwrovnrwovrn "


        },
        {
            name: <img src="/images/Tahoe.jpg" alt="Tahoe Picture" />,
            description: "Second Projectcnjkcnrvkrjnvekrnver eckjewc ewkcjwefewlfjnwekfwenfwk rnjfrwkndvsdfmvsoifvnsfnovnmevonvowivn wodcnsocdn3iowwcownworvinrwvownrnoivnwrovnrwovrn "

        }
    ]



    return (
        <>
            <Header />
            <h1 id={styles.title}>My Personal Projects</h1>
            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    <CarouselTemplate items={items} />
                </div>
            </div>
            <div className={styles.listOfProjects} >
                <Card name={"Camp Site"} link={"Github1"} description={"awesomedoiwjedwodwedijewdwwwwwwwdonowivnriovnreiovnerovneriovnervnervnenvoe"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
                <Card name={"Porfolio"} link={"Github2"} description={"curada"} />
            </div>
            <Navbar />
            <Footer />
        </>
    )
}

export default Portfolio