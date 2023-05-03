import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { CommentModule } from './comment/comment.module';
import { NewsModule } from './news/news.module';
import env from './env';

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_URL), TodosModule, UsersModule, AuthModule, CategoryModule, CommentModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
