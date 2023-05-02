import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

export class Comment {
  @Prop({ default: () => nanoid(), type: String })
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  comment: string;

  @Prop({ required: true })
  newsID: string;

  createdAt: Date;
  updateAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
