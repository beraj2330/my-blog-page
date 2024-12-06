// /pages/about.tsx
import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.header}>About Us</h1>
        <p className={styles.paragraph}>
          Welcome to our blog! Here, you'll find insightful posts on a variety of topics. Stay tuned for more updates!
        </p>
      </div>
    </div>
  );
};

export default About;
