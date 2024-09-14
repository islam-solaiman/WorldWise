import AppNav from "./AppNav"
import styles from "./Sidebar.module.css"
import Footer from "./Footer"
import Logo from "./Logo"

function SideBar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />

            <p>List of Cities</p>

            <Footer />
            
        </div>
    )
}

export default SideBar
