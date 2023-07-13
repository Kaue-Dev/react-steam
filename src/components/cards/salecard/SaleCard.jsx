import styles from './SaleCard.module.css'

import Image from 'next/image'

import AddCartButton from '@/components/addcartbutton/AddCartButton'

const SaleCard = () => {
  return (
    <div className={styles.saleCard}>
      <Image src="/products/league-of-legends.jpg" width={250} height={300} />
      <div className={styles.infos}>
        <h3>Oferta Exclusiva</h3>
        <div className={styles.priceCard}>
          <span>-20%</span>
          <div className={styles.prices}>
            <p>R$99,90</p>
            <h4>R$89,90</h4>
          </div>
        </div>
        <AddCartButton fullWidth>Adicionar ao carrinho</AddCartButton>
      </div>
    </div>
  )
}

export default SaleCard