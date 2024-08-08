import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateIncidentReportDto } from './dto/create-incident-report.dto';
import { IncidentReport } from './schemas/incident-report.schema';

@Injectable()
export class IncidentReportsService {
  constructor(@InjectModel(IncidentReport.name) private readonly model: Model<IncidentReport>) {}

  async create(createDto: CreateIncidentReportDto): Promise<IncidentReport> {
    const existingRecord = await this.model.findOne({ incidentId: createDto.incidentId }).exec();
    if (existingRecord) {
      throw new ConflictException(`Incident report with ID ${createDto.incidentId} already exists`);
    }
    return this.model.create(createDto);
  }

  async findAll(): Promise<IncidentReport[]> {
    return this.model.find().exec();
  }

  async findOne(incidentId: string): Promise<IncidentReport> {
    const record = await this.model.findOne({ incidentId }).exec();
    if (!record) {
      throw new NotFoundException(`Incident report with ID ${incidentId} not found`);
    }
    return record;
  }

  async delete(incidentId: string): Promise<any> {
    const result = await this.model.deleteOne({ incidentId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Incident report with ID ${incidentId} not found`);
    }
    return result;
  }
}
