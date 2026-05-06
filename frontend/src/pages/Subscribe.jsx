import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styles from './Subscribe.module.css'

const user = { name: 'Анна', subscribed: false }

const features = [
  'Полный доступ ко всем видео и записям',
  'Новые материалы каждую неделю',
  'Поиск по темам и экспертам',
  'Смотрите на любом устройстве',
  'Поддержка по вопросам контента',
]

export default function Subscribe() {
  const navigate = useNavigate()
  const [period, setPeriod] = useState('year')
  const [loading, setLoading] = useState(false)

  const price = period === 'year' ? '990' : '149'
  const perMonth = period === 'year' ? '83' : '149'
  const saving = period === 'year'

  const subscribe = () => {
    setLoading(true)
    setTimeout(() => navigate('/dashboard'), 1200)
  }

  return (
    <div className={styles.page}>
      <Navbar user={user} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>Выберите подписку</h1>
          <p className={styles.sub}>Полный доступ ко всем материалам платформы</p>
        </div>

        {/* Period toggle */}
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleBtn} ${period === 'month' ? styles.toggleActive : ''}`}
            onClick={() => setPeriod('month')}
          >
            Месяц
          </button>
          <button
            className={`${styles.toggleBtn} ${period === 'year' ? styles.toggleActive : ''}`}
            onClick={() => setPeriod('year')}
          >
            Год
            <span className={styles.saveBadge}>−44%</span>
          </button>
        </div>

        {/* Price card */}
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.planName}>Полный доступ</div>
            <div className={styles.priceRow}>
              <span className={styles.price}>{price} ₽</span>
              <span className={styles.pricePer}>/ {period === 'year' ? 'год' : 'месяц'}</span>
            </div>
            {saving && (
              <p className={styles.saving}>
                Всего {perMonth} ₽ в месяц — экономия 736 ₽
              </p>
            )}
          </div>

          <div className={styles.divider} />

          <ul className={styles.features}>
            {features.map(f => (
              <li key={f} className={styles.feature}>
                <span className={styles.featureCheck}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <button className={styles.btn} onClick={subscribe} disabled={loading}>
            {loading ? <span className={styles.spinner} /> : 'Оформить подписку'}
          </button>

          <p className={styles.trial}>
            7 дней бесплатного доступа · Отмена в любой момент
          </p>
        </div>

        <p className={styles.secure}>
          🔒 Безопасная оплата · Никаких скрытых платежей
        </p>

        <Link to="/dashboard" className={styles.skip}>
          Пропустить — смотреть бесплатные материалы →
        </Link>
      </div>
    </div>
  )
}
