import { Children } from 'react'
import styles from './AddCartButton.module.css'

const AddCartButton = ({ children, fullWidth, ...props }) => {
  return (
    <button className={`${styles.button} ${fullWidth && styles.fullWidth}`} {...props}>
      {children}
    </button>
  )
}

export default AddCartButton