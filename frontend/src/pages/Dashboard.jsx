import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styles from './Dashboard.module.css'

const user = { name: 'Анна', subscribed: true }

const categories = ['Все', 'Кардиология', 'Неврология', 'Нутрициология', 'Ортопедия']

const videos = [
  {
    id: 1,
    title: 'Как читать анализ крови: разбор каждого показателя',
    category: 'Общее',
    duration: '48 мин',
    date: '2 мая 2025',
    locked: false,
    thumb: null,
    new: true,
  },
  {
    id: 2,
    title: 'Давление 130/85 — это уже проблема?',
    category: 'Кардиология',
    duration: '34 мин',
    date: '25 апр 2025',
    locked: false,
    thumb: null,
    new: false,
  },
  {
    id: 3,
    title: 'Мигрень: триггеры, лечение, профилактика',
    category: 'Неврология',
    duration: '1 ч 02 мин',
    date: '18 апр 2025',
    locked: true,
    thumb: null,
    new: false,
  },
  {
    id: 4,
    title: 'Что происходит с суставами после 40 лет',
    category: 'Ортопедия',
    duration: '52 мин',
    date: '11 апр 2025',
    locked: true,
    thumb: null,
    new: false,
  },
  {
    id: 5,
    title: 'Витамин D: дефицит, нормы, как принимать',
    category: 'Нутрициология',
    duration: '41 мин',
    date: '4 апр 2025',
    locked: true,
    thumb: null,
    new: false,
  },
  {
    id: 6,
    title: 'Щитовидная железа: когда бить тревогу',
    category: 'Эндокринология',
    duration: '58 мин',
    date: '28 мар 2025',
    locked: true,
    thumb: null,
    new: false,
  },
]

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('Все')

  const filtered = activeCategory === 'Все'
    ? videos
    : videos.filter(v => v.category === activeCategory)

  return (
    <div className={styles.page}>
      <Navbar user={user} />

      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Привет, {user.name} 👋</h1>
            <p className={styles.sub}>Продолжайте изучать — новые материалы выходят каждую неделю</p>
          </div>
          {!user.subscribed && (
            <Link to="/subscribe" className={styles.subBanner}>
              <span>Оформите подписку для полного доступа</span>
              <span className={styles.subBannerArrow}>→</span>
            </Link>
          )}
        </div>

        {/* Last watched */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Продолжить просмотр</h2>
          <Link to="/video/1" className={styles.continueCard}>
            <div className={styles.continueThumbnail}>
              <div className={styles.continuePlay}>▶</div>
              <div className={styles.continueBar}>
                <div className={styles.continueProgress} style={{ width: '35%' }} />
              </div>
            </div>
            <div className={styles.continueInfo}>
              <span className={styles.continueCategory}>Общее</span>
              <h3 className={styles.continueTitle}>Как читать анализ крови: разбор каждого показателя</h3>
              <p className={styles.continueMeta}>Просмотрено 35% · Осталось 31 мин</p>
            </div>
          </Link>
        </section>

        {/* All videos */}
        <section className={styles.section}>
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>Все материалы</h2>
            <div className={styles.categories}>
              {categories.map(c => (
                <button
                  key={c}
                  className={`${styles.catBtn} ${activeCategory === c ? styles.catActive : ''}`}
                  onClick={() => setActiveCategory(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.grid}>
            {filtered.map(v => (
              <Link
                to={v.locked ? '/subscribe' : `/video/${v.id}`}
                key={v.id}
                className={`${styles.card} ${v.locked ? styles.cardLocked : ''}`}
              >
                <div className={styles.thumb}>
                  {v.new && <span className={styles.newBadge}>Новое</span>}
                  {v.locked && (
                    <div className={styles.lockOverlay}>
                      <span className={styles.lockIcon}>🔒</span>
                      <span className={styles.lockText}>Подписка</span>
                    </div>
                  )}
                  {!v.locked && <div className={styles.playBtn}>▶</div>}
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardCat}>{v.category}</span>
                  <h3 className={styles.cardTitle}>{v.title}</h3>
                  <div className={styles.cardMeta}>
                    <span>{v.duration}</span>
                    <span>·</span>
                    <span>{v.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
