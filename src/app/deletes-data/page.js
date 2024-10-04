// pages/deletes-data.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function DeletesData() {
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
              <Link href="/support" legacyBehavior>
                <a>Support</a>
              </Link>
            </li>
            <li>
              <Link href="/faqs" legacyBehavior>
                <a>FAQs</a>
              </Link>
            </li>
            <li>
              <Link href="/others">Others</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Delete Your Data</h1>
        <p className={styles.description}>
          This page describes the steps required to delete your account and data.
        </p>

        <p className={styles.description}>
          If you wish to request the deletion of your account and all associated data, please follow the steps below.
        </p>

        <section className={styles.steps}>
          <h2>Steps to Delete Your Account:</h2>
          <ol>
            <li>
              <strong>Contact Us:</strong> Send an email to{' '}
              <a href="mailto:support@yourapp.com">support@yourapp.com</a> with the subject line "Request for Account Deletion." 
              Please include your registered email address or user ID.
            </li>
            <li>
              <strong>Verification:</strong> We will verify your identity. We may ask for additional information to confirm that you are the account owner.
            </li>
            <li>
              <strong>Deletion Process:</strong> Once verified, we will delete your account and all associated data from our systems. You will receive a confirmation once your account is deleted.
            </li>
          </ol>
        </section>

        <section className={styles.dataTypes}>
          <h2>What Data is Deleted:</h2>
          <ul>
            <li>Authentication Data (email, profile information, etc.)</li>
            <li>User Data stored in Firestore or Realtime Database (e.g., posts, messages)</li>
            <li>Files stored in Firebase Storage associated with your account</li>
          </ul>

          <h2>What Data is Retained:</h2>
          <ul>
            <li>Log Data (retained for legal compliance and security purposes)</li>
          </ul>

          <h2>Retention Period:</h2>
          <p>
            We may retain some data as required by law for up to 30 days. After this period, all data will be permanently deleted.
          </p>
        </section>

        <section className={styles.contact}>
          <h2>Contact Us:</h2>
          <p>If you have any questions, feel free to reach out to us at <a href="mailto:support@yourapp.com">support@yourapp.com</a>.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
