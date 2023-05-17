import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Secured } from 'src/auth/secured.decorator';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private readonly newsModel: Model<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    console.log('createNewsDto:', createNewsDto);
    const result = new this.newsModel(createNewsDto);
    return result.save();
  }

  async findAll() {
    const result = await this.newsModel.find();
    return result;
  }

  async findOne(_id: string) {
    return await this.newsModel.findById(_id);
  }

  async update(_id: string, updateNewsDto: UpdateNewsDto) {
    const result = await this.newsModel.updateOne({ _id }, updateNewsDto);
    return result;
  }

  @Secured('admin')
  async remove(_id: string) {
    await this.newsModel.deleteOne({ _id });
    return _id;
  }
}
