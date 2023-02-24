import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";

import Imagen from "../../Imagen/ElectroMarkets.jpg" ;
//<img src={Imagen} alt="" />

const NavBar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img src={Imagen} alt="ElectroMarkets" 
      style= {{ width: "8%", objectFit: "scale-down" }}
      
      />
      <ul className={styles.containerList}>
        <li style={{ backgroundColor: "yellow" }}>Venta</li>
        <li style={{ backgroundColor: "yellow" }}>Electrodomesticos</li>
        <li style={{ backgroundColor: "yellow" }}>Ayuda</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
