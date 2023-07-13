import styles from './SearchBar.module.css'

const SearchBar = ({ fullWidth, ...props }) => {
  return (
    <input 
    className={`${styles.searchBar} ${fullWidth && styles.fullWidth}`} 
    {...props} />
  )
}

export default SearchBar