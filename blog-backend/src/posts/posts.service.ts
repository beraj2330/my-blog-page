// /src/posts/posts.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  // Fetch all posts
  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  // Fetch single post by ID
  async findOne(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: { id }, // Pass ID in the `where` condition
    });
  }
}
