import styles from './technologiesList.module.css';
import useItemGlider from './hooks/useItemGlider';
import React from 'react'
import { v4 as uuidv4 } from 'uuid'



function TechnologiesList() {

    //An array listing all tech icons 
    const technology = [


        <div id={styles.html5} key={1}>
            <i className="fab fa-html5 fa-8x"></i>
            <h3>HTML5</h3>
        </div>,

        <div id={styles.css3} key={2}>
            <i className="fab fa-css3-alt fa-8x"></i>
            <h3>CSS3</h3>
        </div>,

        <div id={styles.js} key={3}>
            <i className="fab fa-js fa-8x"></i>
            <h3>JavaScript</h3>
        </div>,

        <div id={styles.react} key={4}>
            <i className="fab fa-react fa-8x"></i>
            <h3>React</h3>
        </div>,

        <div id={styles.nodejs} key={5}>
            <i className="fab fa-node fa-8x"></i>
            <h3>Node JavaScript</h3>
        </div>,

        <div id={styles.ruby} key={6}>
            <div id={styles.rubyIcon}>
                <i className="far fa-gem fa-8x"></i>
            </div>
            <h3>Ruby</h3>

        </div>,

        <div id={styles.bootstrap} key={7}>
            <i className="fab fa-bootstrap fa-8x"></i>
            <h3>Bootstrap</h3>
        </div>,

        <div id={styles.github} key={8}>
            <i className="fab fa-github fa-8x" ></i>
            <h3>Github</h3>
        </div>

    ]

    // Calls the useItemGlider hook - functionality to move within an array
    const [index, array, previousItem, nextItem] = useItemGlider(technology, 0);

    //Store five icons in an array, and added conditional statements based on index location
    let iconImage1 = array[index]
    let iconImage2
    let iconImage3
    let iconImage4
    let iconImage5

    if (index === 4) {
        iconImage2 = array[index + 1]
        iconImage3 = array[index + 2]
        iconImage4 = array[index + 3]
        iconImage5 = array[0]
    }
    else if (index === 5) {
        iconImage2 = array[index + 1]
        iconImage3 = array[index + 2]
        iconImage4 = array[0]
        iconImage5 = array[1]
    }
    else if (index === 6) {
        iconImage2 = array[index + 1]
        iconImage3 = array[0]
        iconImage4 = array[1]
        iconImage5 = array[2]
    }
    else if (index === 7) {
        iconImage2 = array[0]
        iconImage3 = array[1]
        iconImage4 = array[2]
        iconImage5 = array[3]
    }
    else {
        iconImage2 = array[index + 1]
        iconImage3 = array[index + 2]
        iconImage4 = array[index + 3]
        iconImage5 = array[index + 4]
    }


    let iconImages = [iconImage1, iconImage2, iconImage3, iconImage4, iconImage5]


    // Automate the function to repeat the nextItem function every 3 seconds
    let iconSlider = () => {
        setTimeout(nextItem, 4000);
    }
    iconSlider()


    return (

        <>
            <div className={styles.container}>
                {iconImages.map(icon => <div key={uuidv4()}>{icon}</div>)}
            </div>
        </>

    )

}

export default TechnologiesList;