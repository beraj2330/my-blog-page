import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  async createComment(content: string, author: string, postId: number) {
    const comment = this.commentsRepository.create({
      content,
      author,
      date: new Date().toISOString(),
      post: { id: postId },
    });
    return this.commentsRepository.save(comment);
  }

  async getCommentsByPost(postId: number) {
    return this.commentsRepository.find({
      where: { post: { id: postId } },
      order: { date: 'ASC' },
    });
  }

  async deleteComment(id: number) {
    return this.commentsRepository.delete(id);
  }
}
