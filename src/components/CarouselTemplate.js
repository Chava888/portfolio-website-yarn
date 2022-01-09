import React from 'react'
import styles from './carouselTemplate.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useItemGlider from './hooks/useItemGlider';
import { v4 as uuidv4 } from 'uuid'




export default function CarouselTemplate(props) {


    // Calls the useItemGlider hook - functionality to move within an array
    const [index, array, previousItem, nextItem] = useItemGlider(props.items, 0);


    //Create a indicator box
    let indicator = array.map(item => false)//Creates a array of false statements based on input items array( array must have name and description keys)
    indicator[index] = true; //Sets true an element where index is currently present


    //Create an array of <img> objects to render based on index
    let images = array.map(item => {
        return <img src={item.name.props.src} alt={item.name.props.alt} className={styles.image} key={uuidv4()} />
    })


    return (
        <div className={styles.container}>
            <div className={styles.carouselContainer}>
                <button className={styles.previous} onClick={previousItem}><div className={styles.backward}><ArrowBackIosNewIcon /></div></button>
                <div className={styles.contentInformation}>
                    <div className={styles.imageContainer}>{images[index]}</div>
                    {array[index].description && <div className={styles.description}>{array[index].description}</div>}
                </div>
                <button className={styles.next} onClick={nextItem}><div className={styles.forward}><ArrowForwardIosIcon /></div></button>
            </div>
            <div className={styles.indicatorContainer}>
                {indicator.map(element => {
                    if (element === true) {
                        return <div className={styles.activeIndicator}></div>
                    }
                    else { return <div className={styles.inactiveIndicator}></div> }
                })}
            </div>
        </div>
    )

}

