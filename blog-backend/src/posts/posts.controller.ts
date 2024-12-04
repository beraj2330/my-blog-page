// /src/posts/posts.controller.ts
import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './create-post.dto';
import { post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  // Get all posts
  @Get()
  async findAll(): Promise<post[]> {
    return this.postsService.findAll();
  }

  // Get a single post by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<post> {
    return this.postsService.findOne(id);
  }

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Post(':id/like')
  async likePost(@Param('id') id: number) {
    return this.postsService.updateLikes(id); // Update the like count
  }
}
