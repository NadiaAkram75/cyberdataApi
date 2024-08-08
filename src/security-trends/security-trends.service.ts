import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSecurityTrendDto } from './dto/create-security-trend.dto';
import { SecurityTrend } from './schemas/security-trend.schema';

@Injectable()
export class SecurityTrendsService {
  constructor(@InjectModel(SecurityTrend.name) private readonly model: Model<SecurityTrend>) {}

  async create(createDto: CreateSecurityTrendDto): Promise<SecurityTrend> {
    return this.model.create(createDto);
  }

  async findAll(): Promise<SecurityTrend[]> {
    return this.model.find().exec();
  }

  async findOne(trendId: string): Promise<SecurityTrend> {
    const record = await this.model.findById(trendId).exec();
    if (!record) {
      throw new NotFoundException(`Record with ID ${trendId} not found`);
    }
    return record;
  }

  // async update(id: string, updateDto: CreateSecurityTrendDto): Promise<SecurityTrend> {
  //   const record = await this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  //   if (!record) {
  //     throw new NotFoundException(`Record with ID ${id} not found`);
  //   }
  //   return record;
  // }

  async delete(trendId: string): Promise<any> {
    const result = await this.model.findByIdAndDelete(trendId).exec();
    if (!result) {
      throw new NotFoundException(`Record with ID ${trendId} not found`);
    }
    return result;
  }
}
