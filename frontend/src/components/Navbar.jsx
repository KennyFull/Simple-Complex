import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({ user }) {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <nav className={`${styles.nav} ${isLanding ? styles.transparent : styles.solid}`}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoIcon}>◎</span>
        Просто о сложном
      </Link>

      <div className={styles.actions}>
        {user ? (
          <>
            <Link to="/dashboard" className={styles.link}>Материалы</Link>
            <div className={styles.avatar}>{user.name[0]}</div>
          </>
        ) : (
          <>
            <Link to="/login" className={styles.link}>Войти</Link>
            <Link to="/register" className={styles.btn}>Начать бесплатно</Link>
          </>
        )}
      </div>
    </nav>
  )
}
