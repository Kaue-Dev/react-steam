import styles from './SaleCard.module.css'

import Image from 'next/image'

import AddCartButton from '@/components/addcartbutton/AddCartButton'

const SaleCard = ({ image, discountPercent, fullPrice, discountPrice, onAdd }) => {
  return (
    <div className={styles.saleCard}>
      <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
      <div className={styles.infos}>
        <h3>Oferta Exclusiva</h3>
        <div className={styles.priceCard}>
          <span>-{discountPercent}</span>
          <div className={styles.prices}>
            <p>R${fullPrice.toFixed(2)}</p>
            <h4>R${discountPrice.toFixed(2)}</h4>
          </div>
        </div>
        <AddCartButton fullWidth onClick={onAdd} >Adicionar ao carrinho</AddCartButton>
      </div>
    </div>
  )
}

//Define props default
SaleCard.defaultProps = {
  discountPercent: "50%",
  fullPrice: 99.90,
  discountPrice: 49.90,
}

export default SaleCard