import Navbar from './components/Navbar'
import Footer from './components/Footer'
import styles from './styles/Portfolio.module.css'
import CarouselTemplate from './components/CarouselTemplate'
import Card from './components/Card'
import { v4 as uuidv4 } from 'uuid'



export default function Portfolio() {

    //An array listing projects based on keys: name & description & alt & key
    let items = [
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641873852/portfolio-website/portfolio-website_Photo1_sl6z3w.jpg" alt="personal website project" key={uuidv4()} />,
            description: "Personal portfolio project project consisted of using React, Yarn, and GitHub technologies. Functional components were created for the various parts of the website and downloaded yarn packages to create this project. Currently, this project is only a front-end."

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641873616/portfolio-website/treasure-hunt_Photo1_djmdxk.jpg" alt="treasure hunt project" key={uuidv4()} />,
            description: "Treasure hunt mini-project was developed as part of my pre-orientation of my Echo 2021 cohort. This project consisted of HTML, CSS and Javascript to create functionality, and working with another individual to accomplish the success of this project."

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641873141/portfolio-website/tic-tac-toe_Photo1_pw3n0q.jpg" alt="tic-tac-toe project" key={uuidv4()} />,
            description: "Tic-Tac-Toe project consisted of working with another individual and use of React to create the game. Two class components were created to address the logic and presentation of the boardgame. Working with another individual we perform pair programming to complete this project."

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641872686/portfolio-website/pig-latin-fms_photo1_xapkbh.jpg" alt="pig latin project" key={uuidv4()} />,
            description: "Pig latin project consisted of working with a team using existing code in React and refactor the logic of the code to perform word translation. Class components were used in the React application."

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641872268/portfolio-website/lightbulb-challenge-Photo1_njfvte.jpg" alt="lightbulb project" key={uuidv4()} />,
            description: "The lightbulb project consisted of react class components that used toggle logic and rendering of duplicate lightbuls that behave independently from each other. In this project javascript (JSX in the render() method) and css was used to implement logic and style. "

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641871661/portfolio-website/Yelp_Project_Photo_awxvsq.png" alt="yelp campground project" key={uuidv4()} />,
            description: "The Yelp Campground Project is a full-stack application that I completed by following a online tutorial. The technologies used to create the application was html, css, bootstrap, mongodb, express back-end framework, javascript, NPM packages, and APIs."

        }
    ]



    return (
        <>
            <h1 id={styles.title}><a href="https://github.com/Chava888" target="_blank"><i className="fab fa-github fa-2x" ></i></a> My Personal Projects </h1>
            <div className={styles.carousel}>
                <CarouselTemplate items={items} />
            </div>

            <div className={styles.listOfProjects} >
                <Card name={"Personal Website Project"} imgLink={items[0].name} link={"https://github.com/Chava888/portfolio-website-yarn"} description={"React, HTML, CSS, Javascript"} />
                <Card name={"Treasure Hunt Project"} imgLink={items[1].name} link={"https://github.com/learn-academy-2021-echo/treasure-hunt-Chava888"} description={"HTML, CSS, Javascript"} />
                <Card name={"Tic-tac-toe Project"} imgLink={items[2].name} link={"https://github.com/learn-academy-2021-echo/tic-tac-toe-equipo-elite"} description={"React, Javascript, JSX, CSS"} />
                <Card name={"Pig Latin Project"} imgLink={items[3].name} link={"https://github.com/learn-academy-2021-echo/pig-latin-fms_incryption"} description={"React, Javascript, JSX, CSS"} />
                <Card name={"Lightbulb Project"} imgLink={items[4].name} link={"https://github.com/learn-academy-2021-echo/lightbulb-challenge-Chava888"} description={"React, Javascript, JSX, CSS"} />
                <Card name={"Yelp Campground Project"} imgLink={items[5].name} link={"https://vast-chamber-86868.herokuapp.com/"} description={"HTML, CSS, Javascript, Express, MongoDB"} />
            </div>
            <Navbar />
            <Footer />
        </>
    )
}

