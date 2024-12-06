// /components/Comments.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/Comments.module.css";  // Adjusted path

interface Comment {
  id: number;
  content: string;
  author: string;
  date: string;
}

const Comments = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    // Fetch comments for the post
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/comments/post/${postId}`);
        setComments(response.data);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, [postId]);

  const handleAddComment = async () => {
    if (!newComment.trim() || !author.trim()) {
      alert("Please enter a comment and author name.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/comments", {
        content: newComment,
        author,
        postId,
      });
      setComments([...comments, response.data]); // Add the new comment to the list
      setNewComment("");
      setAuthor("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/comments/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (err) {
      console.error("Error deleting comment:", err);
    }
  };

  return (
    <div className={styles.commentsSection}>
      <h3>Comments</h3>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <p>{comment.content}</p>
            <small>
              By {comment.author} on {new Date(comment.date).toLocaleDateString()}
            </small>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className={styles.addComment}>
        <textarea
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className={styles.textarea}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAddComment} className={styles.button}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
