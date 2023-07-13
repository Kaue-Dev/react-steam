//Css
import styles from "./navbar.module.css";
//Icons
import { BsCart2 } from "react-icons/bs";
//Components
import Logo from "@/components/logo/logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <input type="text" />
      <BsCart2 size={40} />
    </nav>
  );
};

export default Navbar;
