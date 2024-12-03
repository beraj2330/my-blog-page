// /components/Navbar.tsx
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">BLOG</Link>
    </div>
    <div className={styles.links}>
      <Link href="/about">About</Link>
      <Link href="/posts">Home</Link>
    </div>
  </nav>
);

export default Navbar;
    