// pages/index.js
import Link from 'next/link';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/policies" legacyBehavior>
                <a>Policies</a>
              </Link>
            </li>
            <li>
              <Link href="/deletes-data" legacyBehavior>
                <a>Deletes Data</a>
              </Link>
            </li>
            <li>
              <Link href="/others" legacyBehavior>
                <a>Others</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Our Website</h1>
        <p className={styles.description}>
          Navigate through the different sections to learn more about our policies, data deletion process, and more.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
