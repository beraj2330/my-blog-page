// /pages/index.tsx
import { GetServerSideProps } from 'next';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import axios from 'axios';
import styles from '../styles/Home.module.css';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <Link href={`/posts/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <small>By {post.author} on {post.date}</small>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/posts'); // Ensure the backend endpoint is correct
  const posts = response.data;

  return {
    props: { posts },
  };
};

export default Home;
