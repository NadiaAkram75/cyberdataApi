import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIncidentReportDto } from './dto/create-incident-report.dto';
import { IncidentReport } from './schemas/incident-report.schema';

@Injectable()
export class IncidentReportsService {
  constructor(@InjectModel(IncidentReport.name) private readonly model: Model<IncidentReport>) {}

  async create(createDto: CreateIncidentReportDto): Promise<IncidentReport> {
    return this.model.create(createDto);
  }

  async findAll(): Promise<IncidentReport[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<IncidentReport> {
    const record = await this.model.findById(id).exec();
    if (!record) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return record;
  }

  async update(id: string, updateDto: CreateIncidentReportDto): Promise<IncidentReport> {
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
