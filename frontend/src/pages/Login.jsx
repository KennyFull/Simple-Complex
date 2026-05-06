import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Auth.module.css'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => navigate('/dashboard'), 1000)
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <Link to="/" className={styles.logo}>◎ Просто о сложном</Link>
        <h1 className={styles.title}>Вход в аккаунт</h1>
        <p className={styles.sub}>Введите данные для входа</p>

        <form className={styles.form} onSubmit={submit}>
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
            <label className={styles.label}>
              Пароль
              <a href="#" className={styles.forgotLink}>Забыли?</a>
            </label>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handle}
              required
            />
          </div>
          <button className={styles.submit} type="submit" disabled={loading}>
            {loading ? <span className={styles.spinner} /> : 'Войти'}
          </button>
        </form>

        <p className={styles.switch}>
          Нет аккаунта?{' '}
          <Link to="/register" className={styles.switchLink}>Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  )
}
