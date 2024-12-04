// /components/Navbar.tsx
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">BLOG</Link>
    </div>
    <div className={styles.links}>
    <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/add-blog">Add Blog</Link>
    </div>
  </nav>
);

export default Navbar;