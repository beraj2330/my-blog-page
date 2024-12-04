import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from '../comments/comment.entity';

@Entity()
export class post {
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

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
