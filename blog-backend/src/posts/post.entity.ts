// /src/posts/post.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column()
  author: string;

  @Column()
  date: string;

  @Column('int', { default: 0 })
  views: number;

  @Column('int', { default: 0 })
  likes: number;

  @Column('text', { array: true, default: [] })
  tags: string[];
}
