// /src/posts/posts.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { post } from './post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([post])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
