import React from 'react'
import styles from './card.module.css'

//Create a card by passing props for name and link
export default function Card(props) {
    return (
        <div>
            <div id={styles.photoContainer}>
                <div id={styles.imageBox}>
                    <img id={styles.photo} src="https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80" alt="Personal Photo" />
                </div>
                <div id={styles.descriptionContainer}>
                    <h2 id={styles.name}>{props.name}</h2>
                    <h3 id={styles.link}>{props.link}</h3>
                    <p id={styles.description}>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
