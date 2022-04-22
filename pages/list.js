import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/list.module.css';
import { readFile } from 'fs';
import { promisify } from 'util';
import { join } from 'path';

const read = promisify(readFile);

export default function List({ data }) {
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
      <main>
        <h2>List page works</h2>
        <h3>预渲染 - 静态生成 getStaticProps</h3>
        <h4>read pages/_app.js :</h4>
        {data}
      </main>
    </div>
  );
}

/**
 * 预渲染
 * 静态生成 getStaticProps
 */
export async function getStaticProps() {
  const data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8');
  console.log('预渲染 : 静态生成 getStaticProps');
  console.log('read pages/_app.js :\n', data);
  return {
    props: { data },
  };
}
