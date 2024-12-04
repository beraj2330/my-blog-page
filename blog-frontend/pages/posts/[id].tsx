// /pages/posts/[id].tsx
import { GetServerSideProps } from 'next';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import { useState } from 'react';
import styles from '../../styles/PostDetail.module.css';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  views: number;
  likes: number;
  tags: string[];
}

const PostDetail = ({ post }: { post: Post }) => {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = async () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span>By {post.author} | {post.date}</span>
          <span>{post.views} views</span>
          <span>{likes} likes</span>
        </div>
        <div className={styles.content}>
          <p>{post.content}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={handleLike} className={styles.likeButton}>Like</button>
          <button className={styles.shareButton}>Share</button>
        </div>
        <div className={styles.tags}>
          {post.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// TypeScript type assertion for params
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }; // Type assertion to ensure 'id' is treated as a string

  const response = await axios.get(`http://localhost:3000/posts/${id}`);
  const post = response.data;

  return {
    props: { post },
  };
};

export default PostDetail;
