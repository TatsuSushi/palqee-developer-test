import styles from "./breadcrumb.module.css";
import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div>
      <ul className={styles.breadcrumb}>
        <li>
          <Link href="/star-wars/character-list">
            <a>Star Wars</a>
          </Link>
        </li>
        <li>
          <Link href="/star-wars/character-details">
            <a>Characters</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;