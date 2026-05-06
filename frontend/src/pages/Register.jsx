import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Auth.module.css'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => navigate('/subscribe'), 1000)
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Link to="/" className={styles.logo}>◎ Просто о сложном</Link>
        <h1 className={styles.title}>Создать аккаунт</h1>
        <p className={styles.sub}>7 дней бесплатно — без привязки карты</p>

        <form className={styles.form} onSubmit={submit}>
          <div className={styles.field}>
            <label className={styles.label}>Имя</label>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={form.name}
              onChange={handle}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handle}
              required
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Пароль</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Минимум 8 символов"
              value={form.password}
              onChange={handle}
              required
              minLength={8}
            />
          </div>
          <button className={styles.submit} type="submit" disabled={loading}>
            {loading ? <span className={styles.spinner} /> : 'Создать аккаунт'}
          </button>
        </form>

        <p className={styles.terms}>
          Регистрируясь, вы соглашаетесь с{' '}
          <a href="#" className={styles.switchLink}>условиями использования</a>
        </p>

        <p className={styles.switch}>
          Уже есть аккаунт?{' '}
          <Link to="/login" className={styles.switchLink}>Войти</Link>
        </p>
      </div>
    </div>
  )
}
