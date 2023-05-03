import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Secured } from 'src/auth/secured.decorator';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly CategoryModule: Model<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    console.log('createCategoryDto:', CreateCategoryDto);
    const result = new this.CategoryModule(createCategoryDto);
    return result.save();
  }

  async findAll() {
    const result = await this.CategoryModule.find();
    return result;
  }

  async findOne(id: string) {
    return await this.CategoryModule.findById(id);
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    console.log(updateCategoryDto);
    const result = await this.CategoryModule.updateOne(
      { _id: id },
      updateCategoryDto,
    );
    return result;
  }

  // @Secured('admin')
  async remove(id: string) {
    console.log('ustgah function ajillaa...', id);
    await this.CategoryModule.deleteOne({ _id: id });
    return id;
  }
}
