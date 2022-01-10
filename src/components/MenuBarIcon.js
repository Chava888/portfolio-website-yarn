import styles from './menubarIcon.module.css'
import useToggle from "./hooks/useToggle"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';






//This component generates a menu bar icon
function MenuBarIcon() {


    //Calls the toggle hook
    const [isActive, toggleActive] = useToggle(true);


    //Based on isActive true or false the menu button will be rendered or closing icon X
    return (
        <div className={styles.container} onClick={toggleActive}>
            {isActive ?
                <MenuIcon fontSize='large' />
                :
                <CloseIcon fontSize='large' />
            }
        </div >
    )

}

export default MenuBarIcon;