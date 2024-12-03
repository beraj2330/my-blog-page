// /src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'blog',
      autoLoadEntities:true,
      synchronize: true, // Set to false in production
    }),
    PostsModule,
  ],
})
export class AppModule {}
