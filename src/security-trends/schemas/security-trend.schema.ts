import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SecurityTrend extends Document {
  @Prop({ required: true })
  trendName: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  startDate?: Date;

  @Prop()
  endDate?: Date;

  @Prop([String])
  relatedIncidents?: string[];

  @Prop()
  analysis?: string;
}

export const SecurityTrendSchema = SchemaFactory.createForClass(SecurityTrend);
