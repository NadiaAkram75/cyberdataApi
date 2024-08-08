import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAttackVectorDto } from './dto/create-attack-vector.dto';
import { AttackVector } from './schemas/attack-vector.schema';

@Injectable()
export class AttackVectorsService {
  constructor(@InjectModel(AttackVector.name) private readonly model: Model<AttackVector>) {}

  async create(createDto: CreateAttackVectorDto): Promise<AttackVector> {
    // Ensure `externalId` is unique
    if (createDto.externalId) {
      const existingRecord = await this.model.findOne({ externalId: createDto.externalId }).exec();
      if (existingRecord) {
        throw new Error(`Record with externalId ${createDto.externalId} already exists`);
      }
    }
    return this.model.create(createDto);
  }

  async findAll(): Promise<AttackVector[]> {
    return this.model.find().exec();
  }

  async findByExternalId(externalId: string): Promise<AttackVector> {
    const record = await this.model.findOne({ externalId }).exec();
    if (!record) {
      throw new NotFoundException(`Record with externalId ${externalId} not found`);
    }
    return record;
  }

  // async update(externalId: string, updateDto: CreateAttackVectorDto): Promise<AttackVector> {
  //   const record = await this.model.findOneAndUpdate({ externalId }, updateDto, { new: true }).exec();
  //   if (!record) {
  //     throw new NotFoundException(`Record with externalId ${externalId} not found`);
  //   }
  //   return record;
  // }

  async delete(externalId: string): Promise<any> {
    const result = await this.model.findOneAndDelete({ externalId }).exec();
    if (!result) {
      throw new NotFoundException(`Record with externalId ${externalId} not found`);
    }
    return result;
  }
}
