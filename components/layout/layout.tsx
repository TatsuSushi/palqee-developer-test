import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import { FC } from "react";

const current = new Date();
const date = `${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}`;

export const siteTitle = `Star Wars Characters ${date} `;

interface LayoutProps {
  children: object;
  home?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className={styles.sidebar}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <ul>
          <li>
            <Link href="/star-wars/character-list">
              <a>Star Wars</a>
            </Link>
          </li>
          <li>
            <Link href="/star-wars/character-details/character-details">
              <a>Characters</a>
            </Link>
          </li>
        </ul>
      </div>
      <header>{home}</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;