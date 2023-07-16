//Css
import styles from "./navbar.module.css";
//Components
import Logo from "@/components/logo/logo";
import SearchBar from "../searchbar/SearchBar";
import CartButton from "../cartButton/CartButton";

const Navbar = ({ cart, onRemove }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar type="text" placeholder="Buscar..." fullWidth/>
      <CartButton 
        cart={cart}
        onRemove={onRemove}
      />
    </nav>
  );
};

export default Navbar;
