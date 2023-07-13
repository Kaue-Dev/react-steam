import styles from './GameCard.module.css'
import AddCartButton from '@/components/addcartbutton/AddCartButton'

import Image from 'next/image'

const GameCard = () => {
  return (
    <div className={styles.gameCard}>
      <Image className={styles.image} src="/products/counter-strike.jpg" width={300} height={145} />
      <div className={styles.infos}>
        <h2>Counter Strike: Global Offensive</h2>
        <p>Ação, Estratégia, Multijogador</p>
        <div className={styles.prices}>
          <h3>R$99,90</h3>
          <AddCartButton>Adicionar ao carrinho</AddCartButton>
        </div>
      </div>
    </div>
  )
}

export default GameCard