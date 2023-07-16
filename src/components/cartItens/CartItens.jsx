import styles from './CartItens.module.css'

import Image from 'next/image'

const CartItens = ({ image, title, price, onRemove }) => {
  return (
    <div className={styles.cartItensContainer}>
      <Image className={styles.productImage} src={`/products/${image}`} alt={`Produto ${image}`} width={62} height={74} />

      <div className={styles.itemInfos}>
        <h2>{title}</h2>
        <h4>{price.toFixed(2)}</h4>
        <span onClick={onRemove} >Remover</span>
      </div>
    </div>
  )
}

export default CartItens