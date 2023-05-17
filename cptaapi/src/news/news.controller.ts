import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create(@Body() createNewsDto: CreateNewsDto) {
    console.log('createNewsDto:', createNewsDto);
    return this.newsService.create(createNewsDto);
  }

  @Get()
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.newsService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(_id, updateNewsDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.newsService.remove(_id);
  }
}
