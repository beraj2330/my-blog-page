import Link from 'next/link';
import styles from './PostCard.module.css';

interface Post {
  id: number;
  title: string;
  author: string;
  date: string;
  views: number;
  likes: number;
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${post.id}`} className={styles.title}>{post.title}</Link>
      <div className={styles.meta}>
        <span>By {post.author} | {post.date}</span>
        <span>{post.views} views</span>
        <span>{post.likes} likes</span>
      </div>
    </div>
  );
};

export default PostCard;
