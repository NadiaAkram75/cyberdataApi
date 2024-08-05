import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ThreatIntelligence extends Document {
  @Prop({ required: true })
  threatName: string;

  @Prop()
  description: string;

  @Prop([String])
  iocs: string[];

  @Prop([String])
  threatActors: string[];

  @Prop()
  source: string;

  @Prop()
  dateReported: Date;
}

export const ThreatIntelligenceSchema = SchemaFactory.createForClass(ThreatIntelligence);
