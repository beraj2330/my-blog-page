// /src/posts/posts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { post } from './post.entity';
import { CreatePostDto } from './create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(post)
    private postsRepository: Repository<post>,
  ) {}

  async findAll(): Promise<post[]> {
    return this.postsRepository.find();
  }

  async findOne(id: number): Promise<post> {
    return this.postsRepository.findOne({
      where: { id },
    });
  }

  async create(createPostDto: CreatePostDto): Promise<post> {
    const newPost = this.postsRepository.create({
      ...createPostDto,
      // Add current date (you can use `new Date().toISOString()` or any other format)
      date: new Date().toISOString(), 
    });
    return this.postsRepository.save(newPost);
  }

  // Update likes count
  async updateLikes(id: number): Promise<post> {
    const post = await this.postsRepository.findOne({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }

    post.likes += 1; // Increment the like count
    return this.postsRepository.save(post); // Save updated post
  }
}
