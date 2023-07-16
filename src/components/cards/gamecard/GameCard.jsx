import styles from './GameCard.module.css'
import AddCartButton from '@/components/addcartbutton/AddCartButton'

import Image from 'next/image'

const GameCard = ({ image, title, categorys, price, onAdd }) => {
  return (
    <div className={styles.gameCard}>
      <Image className={styles.image} src={`/products/${image}`} width={300} height={145} />
      <div className={styles.infos}>
        <h2>{title}</h2>
        <p>{categorys}</p>
        <div className={styles.prices}>
          <h3>R${price.toFixed(2)}</h3>
          <AddCartButton onClick={onAdd} >Adicionar ao carrinho</AddCartButton>
        </div>
      </div>
    </div>
  )
}

//Define props default
GameCard.defaultProps = {
  categorys: "Ação, Estratégia, Multijogador",
  price: 99.90,
}

export default GameCard