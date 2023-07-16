import AddCartButton from '../addcartbutton/AddCartButton'
import CartItens from '../cartItens/CartItens'

import styles from './CartMenu.module.css'

const CartMenu = ({ cart, onRemove }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.cartItens}>
        {cart.length === 0 && <p>Nenhum produto no carrinho.</p>}
        {cart.map((cartProduct, pos) =>
          <CartItens 
            image={cartProduct.image}
            title={cartProduct.name}
            price={cartProduct.price}
            onRemove={() => onRemove(pos)}
            key={`cart-product-${pos}`}
          />
        )}
      </div>
      <div className={styles.finalPrice}>
        <h2>Total:</h2>
        <h3>R$
          {cart.reduce((prev, current) => prev + current.price, 0).toFixed(2)}
        </h3>
      </div>
      <div className={styles.finishButton}>
        <AddCartButton fullWidth>Finalizar compra</AddCartButton>
      </div>
    </div>
  )
}

export default CartMenu