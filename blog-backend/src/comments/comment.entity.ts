// /comments/comments.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { post } from '../posts/post.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column()
  date: string;

  @ManyToOne(() => post, (post) => post.comments, { onDelete: 'CASCADE' })
  post: post;
}
