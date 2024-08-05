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

  async findOne(id: string): Promise<SecurityTrend> {
    const record = await this.model.findById(id).exec();
    if (!record) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return record;
  }

  async update(id: string, updateDto: CreateSecurityTrendDto): Promise<SecurityTrend> {
    const record = await this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
    if (!record) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return record;
  }

  async delete(id: string): Promise<any> {
    const result = await this.model.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return result;
  }
}
