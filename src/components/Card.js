import React from 'react'
import styles from './card.module.css'

//Create a card by passing props for name and link
export default function Card(props) {
    return (
        <div>
            <div id={styles.photoContainer}>
                <div id={styles.imageBox}>
                    <img id={styles.photo} src={props.imgLink.props.src} alt={`${props.name} photo`} />
                </div>
                <div id={styles.descriptionContainer}>
                    <h2 id={styles.name}>{props.name}</h2>
                    <h3 id={styles.link}><a href={props.link} target="_blank">Link to Project</a></h3>
                    <p id={styles.description}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
