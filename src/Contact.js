import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Header from './components/Header'
import styles from './styles/Contact.module.css'
import { useState } from 'react'


export default function Contact() {


    const [submit, setSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(!submit)
        alert('Under construction please email directly to name@gmail.com')
    };





    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Contact Information</h1>

            {submit === false ?
                //Form starts here..
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <h2 className={styles.headerForForm}>Have a request for a project? Please submit your information below.</h2>
                    <div className={styles.blockWrapper}>
                        <div className={styles.block}>
                            <label className={styles.label} htmlFor="firstName">First Name</label>
                            <input id="firstName" className={styles.inputInformation} placeholder="First Name" required />
                        </div>

                        <div className={styles.block}>
                            <label className={styles.label} htmlFor="lastName">Last Name</label>
                            <input id="lastName" className={styles.inputInformation} placeholder="Last Name" required />
                        </div>
                    </div>

                    <div className={styles.blockWrapper}>
                        <div className={styles.block}>
                            <label className={styles.label} htmlFor="phoneNumber">Phone Number</label>
                            <input id="phoneNumber" className={styles.inputInformation} placeholder="Phone Number" required type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" />
                        </div>
                        <div className={styles.block}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input id="email" className={styles.inputInformation} placeholder="Email" required type="email" />
                        </div>
                    </div>


                    <label className={styles.label} htmlFor="information">Message</label>
                    <textarea id="information" className={styles.textInformation} placeholder="Please provide information here..." required></textarea>

                    <button className={styles.button} type="submit" >Submit Request</button>
                </form>
                :

                < div className={styles.submittedResponse}>
                    <h2 id={styles.closingStatement}>Thank you for submitting your project details, I will get back to you soon.</h2>
                </div>}
            <Navbar />
            <Footer />
        </div >
    )
}
