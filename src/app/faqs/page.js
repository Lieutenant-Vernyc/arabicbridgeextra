// pages/faqs.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function FAQs() {
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
            <li>
              <Link href="/others">Others</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        
        <section className={styles.faqSection}>
          <h2>1. How do I delete my account?</h2>
          <p>
            To delete your account, please visit the <Link href="/deletes-data">Deletes Data</Link> page for detailed instructions.
          </p>

          <h2>2. How do I update the app?</h2>
          <p>
            You can update the app by visiting the App Store and checking for updates. Ensure you're using the latest version to avoid bugs and enjoy new features.
          </p>

          <h2>3. How can I contact support?</h2>
          <p>
            If you need help, please visit the <Link href="/support">Support</Link> page for more information on how to reach us via email or our help center.
          </p>

          <h2>4. How do I report a bug?</h2>
          <p>
            If you find a bug in our app, please send an email to <a href="mailto:support@yourapp.com">support@yourapp.com</a> with a description of the issue and any screenshots if available.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Arabic Bridge. All rights reserved.</p>
      </footer>
    </div>
  );
}
