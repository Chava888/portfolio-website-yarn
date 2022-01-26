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
                        <p>Hello,</p>
                        <p>Let me start by saying that I am a full stack developer that is excited to apply front-end and back-end technologies for new web applications. My prior background before becoming a developer was civil engineering. I used to work for a civil engineering consulting firm to build new infrastructure, where I applied my knowledge and expertise to assist others in projects. My prior experience included collaborating with teams, where communication was essential with team members and clients to succeed in completing the task ahead. However, after six years of working as a civil engineer I decided to pursue a new career path in programming.</p>
                        <p>The new career choice that I am taking is to follow the software developer path. I want to use my knowledge to create new applications based on my own or others’ ideas. I describe myself as an analytical person, enthusiastic about innovative technologies, and adaptive to new environments. My experience in script languages is Ruby and JavaScript for front end and back-end web applications. For creating front end applications, I have applied hyper-text markup language (HTML) and Cascading Style Sheets (CSS). Furthermore, I have used React and Bootstrap technologies for front end applications. The database platforms I have used for applications are MongoDB, which uses JSON for queries, and PostgreSQL, which uses SQL for queries. The back-end frameworks I have used are Rails and Express to create full stack applications.</p>
                        <p>I am currently completing a bootcamp course for full stack web development in San Diego and looking forward to starting a career in web development soon.</p>
                    </div>
                </div>
                <div className={styles.backgroundEducation}>
                    <h2 id={styles.labelEducation}>Educational Background</h2>
                    <ul id={styles.educationList}>
                        <li className={styles.school}>Bachelor of Science Degree in Civil Engineering, University of California, Davis</li>
                        <li className={styles.school}>Master of Science Degree in Geotechnical Engineering, University of California, Berkeley</li>
                        <li className={styles.school}> Learn Academy - Full Stack Development Bootcamp Course</li>
                    </ul>
                </div>

            </div>
            <Navbar />
            <Footer />
        </>
    )
}

