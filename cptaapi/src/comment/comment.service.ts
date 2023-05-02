import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Secured } from 'src/auth/secured.decorator';
import { Todo } from 'src/todos/entities/todo.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private readonly CommentModule: Model<Todo>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Todo> {
    console.log('createCommentDto:', CreateCommentDto);
    const result = new this.CommentModule(createCommentDto);
    return result.save();
  }

  async findAll(): Promise<Todo[]> {
    const result = await this.CommentModule.find();
    return result;
  }

  async findOne(_id: string) {
    return await this.CommentModule.findById(_id);
  }

  async update(_id: string, updateCommentDto: UpdateCommentDto) {
    const result = await this.CommentModule.updateOne(
      { _id },
      updateCommentDto,
    );
    return result;
  }

  @Secured('admin')
  async remove(_id: string) {
    await this.CommentModule.deleteOne({ _id });
    return _id;
  }
}
