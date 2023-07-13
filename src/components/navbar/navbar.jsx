//Css
import styles from "./navbar.module.css";
//Icons
import { BsCart2 } from "react-icons/bs";
//Components
import Logo from "@/components/logo/logo";
import SearchBar from "../searchbar/SearchBar";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar type="text" placeholder="Buscar..." fullWidth/>
      <BsCart2 size={40} />
    </nav>
  );
};

export default Navbar;
