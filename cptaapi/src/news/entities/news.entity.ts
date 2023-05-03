import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema({ timestamps: true })
export class News {
  @Prop({ default: () => nanoid(), type: String })
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  video: string;

  @Prop({ required: true })
  commentCount: string;

  @Prop({ required: true })
  publisher: string;

  @Prop({ required: true })
  categoryID: string;

  createdAt: Date;
  updatedAt: Date;
}

export const NewsSchema = SchemaFactory.createForClass(News);
