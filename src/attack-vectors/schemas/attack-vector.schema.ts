import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class AttackVector extends Document {
  @Prop({ required: true })
  vectorName: string;

  @Prop({ required: true })
  description: string;

  @Prop([String])
  techniques?: string[];

  @Prop([String])
  mitigationStrategies?: string[];

  @Prop([String])
  examples?: string[];
}

export const AttackVectorSchema = SchemaFactory.createForClass(AttackVector);
