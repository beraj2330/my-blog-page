// /comments/comments.controller.ts
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  async createComment(
    @Body('content') content: string,
    @Body('author') author: string,
    @Body('postId') postId: number,
  ) {
    return this.commentsService.createComment(content, author, postId);
  }

  @Get('post/:postId')
  async getComments(@Param('postId') postId: number) {
    return this.commentsService.getCommentsByPost(postId);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: number) {
    return this.commentsService.deleteComment(id);
  }
}
