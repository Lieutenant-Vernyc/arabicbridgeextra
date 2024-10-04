
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Support() {
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
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Support</h1>
        <p className={styles.description}>
          If you have any questions, concerns, or issues with our app, we're here to help! Below are some ways you can get in touch with us for support.
        </p>

        <section className={styles.supportSection}>
          <h2>Contact Us</h2>
          <p>
            For general support or inquiries, please send an email to:
            <a href="mailto:support@yourapp.com">thermontoure7@gmail.com</a>
          </p>
          
        </section>

        <section className={styles.supportSection}>
          <h2>FAQs</h2>
          <p>
            Check out our frequently asked questions (FAQs) to find quick answers to common issues:
            <a href="https://" target="_blank" rel="noopener noreferrer">
            https://arabicbridgeextra-1kjfdilyg-lieutenantvernycs-projects.vercel.app/faqs
            </a>
          </p>
        </section>

        <section className={styles.supportSection}>
          <h2>App Version & Updates</h2>
          <p>
            Ensure you are using the latest version of the app by checking for updates in the App Store. We frequently release updates to fix bugs and introduce new features.
          </p>
          
        </section>

        <section className={styles.supportSection}>
          <h2>Report a Bug</h2>
          <p>
            Found a bug? Let us know by emailing
            <a href="mailto:support@yourapp.com">thermontoure7@gmail.com</a> with details of the issue, including screenshots if possible.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Arabic Bridge. All rights reserved.</p>
      </footer>
    </div>
  );
}
