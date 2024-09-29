// pages/others.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Others() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/policies">Policies</Link>
            </li>
            <li>
              <Link href="/deletes-data">Deletes Data</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Other Information</h1>
        <p className={styles.description}>
          This page contains additional information relevant to the user.
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
