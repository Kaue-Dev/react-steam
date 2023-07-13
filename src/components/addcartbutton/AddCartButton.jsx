import { Children } from 'react'
import styles from './AddCartButton.module.css'

const AddCartButton = ({ children, fullWidth }) => {
  return (
    <button className={`${styles.button} ${fullWidth && styles.fullWidth}`}>
      {children}
    </button>
  )
}

export default AddCartButton