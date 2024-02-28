import { Link } from 'react-router-dom'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Home</Link>
    </div>
  )
}
