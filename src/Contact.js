import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from '../styles/Contact.module.css'
import { useState } from 'react'


function Contact() {


    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(!submit)

    };





    return (
        <div>
            <Header />
            <h1 className={styles.title}>Contact Information</h1>

            {submit === false ?
                //Form starts here..
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <h2 className={styles.headerForForm}>Have a request for a project? Please submit your information below.</h2>
                    <div className={styles.blockWrapper}>
                        <div className={styles.block}>
                            <label className={styles.label} htmlFor="firstName">First Name</label>
                            <input id="firstName" className={styles.inputInformation} placeholder="First Name" />
                        </div>

                        <div className={styles.block}>
                            <label className={styles.label} htmlFor="lastName">Last Name</label>
                            <input id="lastName" className={styles.inputInformation} placeholder="Last Name" />
                        </div>
                    </div>

                    <div className={styles.blockWrapper}>
                        <div className={styles.block}>
                            <label className={styles.label} htmlFor="phoneNumber">Phone Number</label>
                            <input id="phoneNumber" className={styles.inputInformation} placeholder="Phone Number" />
                        </div>
                        <div className={styles.block}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input id="email" className={styles.inputInformation} placeholder="Email" />
                        </div>
                    </div>


                    <label className={styles.label} htmlFor="information">Message</label>
                    <textarea id="information" className={styles.textInformation} placeholder="Please provide information here..."></textarea>

                    <button className={styles.button} type="submit" >Submit Request</button>
                </form>
                :
                <form style={{ height: "69vh" }} className={styles.formContainer}><h2 className={styles.headerForForm} style={{ margin: "50px" }}>Thank you for submitting your project details, I will get back to you soon.</h2></form>}
            <Navbar />
            <Footer />
        </div >
    )
}

export default Contact