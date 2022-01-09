import styles from './menubarIcon.module.css'
import useToggle from "./hooks/useToggle"


//This component generates a menu bar icon
function MenuBarIcon() {


    //Calls the toggle hook
    const [isActive, toggleActive] = useToggle(true);


    //Based on isActive true or false the menu button will be rendered as bars or X
    return (
        <div onClick={toggleActive}>

            {isActive ? <div className={styles.menuIcon}>
                <div className={styles.menuBar}></div>
                <div className={styles.menuBar}></div>
                <div className={styles.menuBar}></div>
            </div>
                :
                <div className={styles.menuIcon}>
                    <div id={styles.containerX}>
                        <div id={styles.xBarSymbolOne}>
                            <div id={styles.xBarSymbolTwo}></div>
                        </div>
                    </div>
                </div>
            }

        </div >
    )

}

export default MenuBarIcon;