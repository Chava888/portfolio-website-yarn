import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Portfolio.module.css'
import CarouselTemplate from '../components/CarouselTemplate'
import Card from '../components/Card'
import { v4 as uuidv4 } from 'uuid'



export default function Portfolio() {

    //An array listing projects based on keys: name & description & alt & key
    let items = [
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641871661/portfolio-website/Yelp_Project_Photo_awxvsq.png" alt="yelp campground project" key={uuidv4()} />,
            description: "The Yelp Campground Project is a full-stack application that I completed by following an online tutorial. The technologies used to create the application were HTML, CSS, Bootstrap, Mongo dB, Express back-end framework, JavaScript, NPM packages, and APIs."
        },
        {

            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1643175647/portfolio-website/portfolio-website_Photo1_sbz2y1.jpg" alt="personal website project" key={uuidv4()} />,
            description: "Personal portfolio project consisted of applying React, Yarn, and GitHub technologies. I used functional components for the various parts of the website and downloaded yarn packages to create this project. Currently, the project is only a front-end application."
        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641873616/portfolio-website/treasure-hunt_Photo1_djmdxk.jpg" alt="treasure hunt project" key={uuidv4()} />,
            description: "Treasure hunt mini project was part of my pre-orientation of my Echo 2021 cohort bootcamp course. This project consisted of the use of HTML, CSS, and JavaScript. Furthermore, I collaborated with another individual to complete this project."

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641873141/portfolio-website/tic-tac-toe_Photo1_pw3n0q.jpg" alt="tic-tac-toe project" key={uuidv4()} />,
            description: "Tic-Tac-Toe project consisted of collaborating with another individual, we used React to create the game. The logic and presentation of the boardgame consists of two class components. In addition, we perform pair programming to complete this project."

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641969152/portfolio-website/pig-latin-fms_photo2_siwbuy.jpg" alt="pig latin project" key={uuidv4()} />,
            description: "Pig Latin project consisted of working in a team and existing code in React. We refactor the logic of the code to do word translation. For the React application, the code consisted of class components."

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641872268/portfolio-website/lightbulb-challenge-Photo1_njfvte.jpg" alt="lightbulb project" key={uuidv4()} />,
            description: "The lightbulb project consisted of react class components, on-off logic, and rendering of duplicate lightbulbs that behave independently from each other. In this project I applied JavaScript, JSX and CSS to implement logic and style."

        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1644816766/portfolio-website/Apartments_App_pp4ipf.png" alt="apartments project" key={uuidv4()} />,
            description: "The apartments project consisted of react class components, postgresql database, and ruby on rails backend framework. The application has CRUD functionality to create, read, update, and delete apartments."
        },
        {
            name: <img src="https://res.cloudinary.com/dxyntgtel/image/upload/v1647207681/portfolio-website/pantry-hero_Photo1_edroyz.jpg" alt="pantry hero project" key={uuidv4()} />,
            description: "The pantry hero project is a front-end stack application with CRUD functionality. The application uses react class components, PostgreSQL database, and ruby on rails backend framework. I worked in a team to develop this application and the purpose of the application was to help users in selecting recipes based on existing food ingredients."
        },
    ]



    return (
        <>
            <h1 id={styles.title}><a href="https://github.com/Chava888" target="_blank"><i className="fab fa-github fa-2x" ></i></a> My Personal Projects </h1>
            <CarouselTemplate items={items} />


            <div className={styles.listOfProjects} >
                <Card name={"Yelp Campground Project"} imgLink={items[0].name} link={"https://vast-chamber-86868.herokuapp.com/"} description={"HTML, CSS, Javascript, Express, MongoDB"} />
                <Card name={"Personal Website Project"} imgLink={items[1].name} link={"https://github.com/Chava888/portfolio-website-yarn"} description={"React, HTML, CSS, Javascript"} />
                <Card name={"Treasure Hunt Project"} imgLink={items[2].name} link={"https://github.com/learn-academy-2021-echo/treasure-hunt-Chava888"} description={"HTML, CSS, Javascript"} />
                <Card name={"Tic-Tac-Toe Project"} imgLink={items[3].name} link={"https://github.com/learn-academy-2021-echo/tic-tac-toe-equipo-elite"} description={"React, Javascript, JSX, CSS"} />
                <Card name={"Pig Latin Project"} imgLink={items[4].name} link={"https://github.com/learn-academy-2021-echo/pig-latin-fms_incryption"} description={"React, Javascript, JSX, CSS"} />
                <Card name={"Lightbulb Project"} imgLink={items[5].name} link={"https://github.com/learn-academy-2021-echo/lightbulb-challenge-Chava888"} description={"React, Javascript, JSX, CSS"} />
                <Card name={"Apartments Project"} imgLink={items[6].name} link={"https://github.com/learn-academy-2021-echo/apartment-app-Chava888"} description={"React, Rails, PostgreSQL, Ruby"} />
                <Card name={"Pantry Hero"} imgLink={items[7].name} link={"https://github.com/Uncapped-Stoners/capstone-project"} description={"React, Rails, PostgreSQL, Ruby, Bootstrap"} />
            </div>
            <Navbar />
            <Footer />
        </>
    )
}

