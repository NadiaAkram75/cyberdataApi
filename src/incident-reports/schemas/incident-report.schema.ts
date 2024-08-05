import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class IncidentReport extends Document {
  @Prop({ required: true })
  incidentId: string;

  @Prop({ required: true })
  incidentType: string;

  @Prop()
  description?: string;

  @Prop([String])
  affectedEntities?: string[];

  @Prop()
  dateOccurred?: Date;

  @Prop()
  impact?: string;

  @Prop()
  response?: string;
}

export const IncidentReportSchema = SchemaFactory.createForClass(IncidentReport);
