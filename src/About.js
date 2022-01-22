import Navbar from './components/Navbar'
import Footer from './components/Footer'
import styles from './styles/About.module.css'


export default function About() {
    return (
        <>
            <div className={styles.aboutContainer}>
                <h1 id={styles.title}>About Myself</h1>
                <div className={styles.profile}>
                    <div id={styles.photoContainer}>
                        <div id={styles.imageBox}>
                            <img id={styles.photo} src="https://res.cloudinary.com/dxyntgtel/image/upload/v1641870954/portfolio-website/IMG_1361-5-5_owigff.jpg" alt="Personal Photo" />
                        </div>
                        <h2 id={styles.name}>Salvador Tena</h2>
                    </div>
                    <div id={styles.aboutContent}>
                        <p>Hi, I am a developer that is excited to apply front-end and back-end technologies on new applications. My background before becoming a developer was civil engineering. I used to work for a civil engineering consulting firm to build new infrastructure, where I applied my knowledge and expertise to assist others in projets. My past experience included working with teams, where communication was essential with team members and clients in order to succed in completing the task ahead. However, after six years of working as a civil engineer I decided to purue a new career path.</p>
                        <p>The new career choice that I am taking is to become a software developer. I want to use my knowldege to create new applications based on my own or others ideas. I describe myself as a problem solver, enthusiastic about new technologies, and adaptive to new environments. I am currently completing a bootcamp course for full stack develpment in San Diego and looking forward to applying my knowldege in a new industry.</p>
                        <p>My experience in script languages are ruby and javascript for front end and back end applications. For creating front end applications, I have applied hyper-text mark up language (HTML) and Cascading Style Sheets (CSS). Furthermore, I have used React and Bootstrap for front end applications. The database platforms I have used for applications are MongoDB and PostgreSQL, which use JSON and SQL for queries, respectively. The back end frameworks I have used are Rails and Express to create full stack applications.</p>
                    </div>
                </div>
                <div className={styles.backgroundEducation}>
                    <h2 id={styles.labelEducation}>Educational Background</h2>
                    <ul>
                        <li className={styles.school}>Bachelor of Science Degree in Civil Engineering, University of California, Davis</li>
                        <li className={styles.school}>Masters of Science Degree in Geotechnical Engineering, University of California, Berkeley</li>
                        <li className={styles.school}> Learn Academy - Full Stack Development Bootcamp Course</li>
                    </ul>
                </div>

            </div>
            <Navbar />
            <Footer />
        </>
    )
}
