import styles from './footer.module.css'



function Footer() {
    return (
        <div>
            <footer className={styles.container}>
                <div className={styles.iconBrands}>
                    <i className="fab fa-instagram fa-2x"></i>
                    <i className="fab fa-twitter fa-2x"></i>
                    <i className="fab fa-linkedin fa-2x"></i>
                    <i className="fab fa-youtube fa-2x"></i>
                </div>
                <div className={styles.yearEstablished}>
                    <i className="far fa-copyright fa-1x"></i><span id={styles.year}>2021 Established</span>
                </div>
            </footer >
        </div >
    )
}

export default Footer