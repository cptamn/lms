import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Secured } from 'src/auth/secured.decorator';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  NewsModule: any;
  constructor(
    @InjectModel(News.name) private readonly todoModel: Model<News>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<News> {
    console.log('createNewsDto:', CreateNewsDto);
    const result = new this.NewsModule(createNewsDto);
    return result.save();
  }

  async findAll() {
    const result = await this.NewsModule.find();
    return result;
  }

  async findOne(_id: string) {
    return await this.NewsModule.findById(_id);
  }

  async update(_id: string, updateNewsDto: UpdateNewsDto) {
    const result = await this.NewsModule.updateOne({ _id }, updateNewsDto);
    return result;
  }

  @Secured('admin')
  async remove(_id: string) {
    await this.NewsModule.deleteOne({ _id });
    return _id;
  }
}
