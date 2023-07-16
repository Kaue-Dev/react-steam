import styles from './CartButton.module.css'
//Hooks
import { useState } from 'react';
//Icons
import { BsCart2 } from "react-icons/bs";
//Components
import CartMenu from '../cartMenu/CartMenu';

const CartButton = ({ cart, onRemove }) => {
  const [opened, setOpened] = useState(false)

  return (
    <div>
      <BsCart2 
        className={styles.cartIcon} 
        size={40} 
        onClick={() => {setOpened(!opened)}}
      />
      {opened && <CartMenu cart={cart} onRemove={onRemove} />}
    </div>
  )
}

export default CartButton