import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/AddBlog.module.css";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert tags string to an array
    const tagsArray = tags.split(",").map((tag) => tag.trim());

    try {
      await axios.post("http://localhost:3000/posts", {
        title,
        content,
        author,
        tags: tagsArray, // Pass tags as an array
      });
      alert("Blog added successfully!");
      router.push("/"); // Redirect to homepage
    } catch (err) {
      console.error(err);
      alert("Error adding the blog.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Add a New Blog</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
            required
          />
          <label htmlFor="title" className={styles.label}>
            Content
          </label>
          <textarea
            id="content"
            rows={10}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
            required
          />
          <label htmlFor="title" className={styles.label}>
            Author
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className={styles.input}
            required
          />
          <label htmlFor="title" className={styles.label}>
            Tags
          </label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Add Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
