import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateThreatIntelligenceDto } from './dto/create-threat-intelligence.dto';
import { UpdateThreatIntelligenceDto } from './dto/update-threat-intelligence.dto';
import { ThreatIntelligence } from './schemas/threat-intelligence.schema';

@Injectable()
export class ThreatIntelligenceService {
  constructor(@InjectModel('ThreatIntelligence') private readonly threatModel: Model<ThreatIntelligence>) {}

  create(createDto: CreateThreatIntelligenceDto): Promise<ThreatIntelligence> {
    const newThreat = new this.threatModel(createDto);
    return newThreat.save();
  }

  findAll(): Promise<ThreatIntelligence[]> {
    return this.threatModel.find().exec();
  }

  findOne(threatId: string): Promise<ThreatIntelligence> {
    return this.threatModel.findById(threatId).exec();
  }

  // update(id: string, updateDto: UpdateThreatIntelligenceDto): Promise<ThreatIntelligence> {
  //   return this.threatModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  // }

  delete(threatId: string): Promise<any> {
    return this.threatModel.findByIdAndDelete(threatId).exec();
  }
}
