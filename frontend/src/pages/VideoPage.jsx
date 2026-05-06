import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styles from './VideoPage.module.css'

const user = { name: 'Анна', subscribed: true }

const video = {
  id: 1,
  title: 'Как читать анализ крови: разбор каждого показателя',
  category: 'Общее',
  duration: '48 мин',
  date: '2 мая 2025',
  speaker: 'Dr. Елена Смирнова',
  speakerRole: 'Терапевт, 15 лет практики',
  description:
    'В этой встрече мы подробно разбираем общий анализ крови: что означает каждый показатель, какие отклонения важны, а какие — норма вариации. Вы узнаете, как правильно читать свои анализы и когда стоит обратиться к врачу.',
  points: [
    'Эритроциты, гемоглобин, гематокрит — что это и норма',
    'Лейкоциты и лейкоцитарная формула',
    'Тромбоциты и коагуляция',
    'Частые ошибки при интерпретации',
    'Когда анализ требует повторной сдачи',
  ],
}

const related = [
  { id: 2, title: 'Давление 130/85 — это уже проблема?', duration: '34 мин', category: 'Кардиология' },
  { id: 5, title: 'Витамин D: дефицит, нормы, как принимать', duration: '41 мин', category: 'Нутрициология' },
]

export default function VideoPage() {
  const { id } = useParams()

  return (
    <div className={styles.page}>
      <Navbar user={user} />

      <div className={styles.inner}>
        <Link to="/dashboard" className={styles.back}>← Все материалы</Link>

        <div className={styles.layout}>
          {/* Main content */}
          <div className={styles.main}>
            {/* Player */}
            <div className={styles.player}>
              <div className={styles.playerInner}>
                <div className={styles.playCircle}>▶</div>
              </div>
              <div className={styles.playerControls}>
                <div className={styles.progress}>
                  <div className={styles.progressFill} style={{ width: '35%' }} />
                  <div className={styles.progressThumb} style={{ left: '35%' }} />
                </div>
                <div className={styles.controlsRow}>
                  <div className={styles.controlsLeft}>
                    <button className={styles.ctrlBtn}>⏮</button>
                    <button className={styles.ctrlBtn}>⏸</button>
                    <button className={styles.ctrlBtn}>⏭</button>
                    <span className={styles.time}>17:04 / 48:00</span>
                  </div>
                  <div className={styles.controlsRight}>
                    <button className={styles.ctrlBtn}>1x</button>
                    <button className={styles.ctrlBtn}>⛶</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className={styles.info}>
              <span className={styles.category}>{video.category}</span>
              <h1 className={styles.title}>{video.title}</h1>
              <div className={styles.meta}>
                <span>{video.date}</span>
                <span>·</span>
                <span>{video.duration}</span>
              </div>
            </div>

            {/* Speaker */}
            <div className={styles.speaker}>
              <div className={styles.speakerAvatar}>Е</div>
              <div>
                <div className={styles.speakerName}>{video.speaker}</div>
                <div className={styles.speakerRole}>{video.speakerRole}</div>
              </div>
            </div>

            {/* Description */}
            <div className={styles.description}>
              <h2 className={styles.descTitle}>О чём эта встреча</h2>
              <p className={styles.descText}>{video.description}</p>
              <ul className={styles.points}>
                {video.points.map(p => (
                  <li key={p} className={styles.point}>
                    <span className={styles.pointDot}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sideTitle}>Похожие материалы</h3>
            <div className={styles.relatedList}>
              {related.map(r => (
                <Link to={`/video/${r.id}`} key={r.id} className={styles.relatedCard}>
                  <div className={styles.relatedThumb}>▶</div>
                  <div className={styles.relatedInfo}>
                    <span className={styles.relatedCat}>{r.category}</span>
                    <p className={styles.relatedTitle}>{r.title}</p>
                    <span className={styles.relatedDuration}>{r.duration}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
