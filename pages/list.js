import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/list.module.css';

export default function List() {
  return (
    <div>
      <Head>
        <title>List page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <img src="/images/logo.jpg" className={styles.navImg} />
        <Link href="/">
          <a className={styles.navA}>back to home</a>
        </Link>
      </nav>
      <main>List page works</main>
    </div>
  );
}
