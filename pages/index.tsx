import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avinash Sewpersadh</title>
        <meta name="description" content="Avinash Sewpersadh - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I&apos;m Avinash Sewpersadh
        </h1>
        <h2 className={styles.subtitle}>
          Engineer
        </h2>

        <p className={styles.description}>
          I&apos;m an engineer with a passion for creating innovative solutions.
        </p>

        <div className={styles.links}>
          <a href="https://github.com/dotavi" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://linkedin.com/in/asewpersadh" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="mailto:avi.ukzn@gmail.com" className={styles.link}>Email</a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Avinash Sewpersadh - All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
