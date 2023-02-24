import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  
  return (
    <div className={styles.containerNavbar}>
      <Logo />
      <ul className={styles.containerList}>
        <li style={{backgroundColor: "yellow"}}>Conocenos</li>
        <li style={{backgroundColor: "yellow"}}>Canchas</li>
        <li style={{backgroundColor: "yellow" }}>Ayuda</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
