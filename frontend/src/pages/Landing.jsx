import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import styles from './Landing.module.css'

const topics = [
  { icon: '🫀', title: 'Кардиология', count: 12 },
  { icon: '🧠', title: 'Неврология', count: 8 },
  { icon: '🦴', title: 'Ортопедия', count: 15 },
  { icon: '🍎', title: 'Нутрициология', count: 21 },
  { icon: '💊', title: 'Фармакология', count: 9 },
  { icon: '🧬', title: 'Генетика', count: 6 },
]

const reviews = [
  {
    name: 'Анна К.',
    role: 'Преподаватель',
    text: 'Наконец-то нашла источник, где медицина объясняется человеческим языком. Смотрю каждую неделю.',
    avatar: 'А',
  },
  {
    name: 'Михаил Р.',
    role: 'Менеджер',
    text: 'После записи о давлении разобрался в своих анализах. Это ценнее любой консультации.',
    avatar: 'М',
  },
  {
    name: 'Елена В.',
    role: 'Мама двоих детей',
    text: 'Подписка окупилась за первую неделю — столько полезного по детскому здоровью.',
    avatar: 'Е',
  },
]

export default function Landing() {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>Новая запись каждую неделю</div>
        <h1 className={styles.heroTitle}>
          Медицина —<br />
          <span className={styles.accent}>понятно и честно</span>
        </h1>
        <p className={styles.heroSub}>
          Видеозаписи встреч с врачами и экспертами. Без сложных терминов,
          без рекламы — только то, что важно для вашего здоровья.
        </p>
        <div className={styles.heroActions}>
          <Link to="/register" className={styles.btnPrimary}>
            Попробовать бесплатно
          </Link>
          <Link to="/login" className={styles.btnGhost}>
            Уже есть аккаунт →
          </Link>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>71+</span>
            <span className={styles.statLabel}>записей встреч</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>12</span>
            <span className={styles.statLabel}>тем о здоровье</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>2 400+</span>
            <span className={styles.statLabel}>подписчиков</span>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Темы, которые мы разбираем</h2>
          <p className={styles.sectionSub}>
            От базовых вопросов до глубоких разборов с экспертами
          </p>
        </div>
        <div className={styles.topicGrid}>
          {topics.map((t) => (
            <div key={t.title} className={styles.topicCard}>
              <span className={styles.topicIcon}>{t.icon}</span>
              <span className={styles.topicTitle}>{t.title}</span>
              <span className={styles.topicCount}>{t.count} видео</span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Как это работает</h2>
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNum}>1</div>
            <h3 className={styles.stepTitle}>Регистрируйтесь</h3>
            <p className={styles.stepText}>Создайте аккаунт за 1 минуту — без лишних данных</p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNum}>2</div>
            <h3 className={styles.stepTitle}>Выберите подписку</h3>
            <p className={styles.stepText}>Один план с полным доступом ко всему контенту</p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNum}>3</div>
            <h3 className={styles.stepTitle}>Смотрите и учитесь</h3>
            <p className={styles.stepText}>Неограниченный доступ ко всем видео и записям</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Что говорят участники</h2>
        </div>
        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.reviewCard}>
              <p className={styles.reviewText}>"{r.text}"</p>
              <div className={styles.reviewAuthor}>
                <div className={styles.reviewAvatar}>{r.avatar}</div>
                <div>
                  <div className={styles.reviewName}>{r.name}</div>
                  <div className={styles.reviewRole}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Готовы разобраться в своём здоровье?</h2>
        <p className={styles.ctaSub}>Первые 7 дней — бесплатно. Отмена в любой момент.</p>
        <Link to="/register" className={styles.btnPrimary}>
          Начать бесплатно
        </Link>
      </section>

      <footer className={styles.footer}>
        <span className={styles.footerLogo}>◎ Просто о сложном</span>
        <span className={styles.footerCopy}>© 2025</span>
      </footer>
    </div>
  )
}
