import { Controller } from '@nestjs/common';

@Controller('posts')
export class PostsController {}
// /src/posts/posts.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  // Get all posts
  @Get()
  async findAll(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  // Get a single post by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Post> {
    return this.postsService.findOne(id);
  }
}
