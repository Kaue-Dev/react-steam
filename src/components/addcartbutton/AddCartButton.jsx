import { Children } from 'react'
import styles from './AddCartButton.module.css'

const AddCartButton = ({ children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

export default AddCartButton