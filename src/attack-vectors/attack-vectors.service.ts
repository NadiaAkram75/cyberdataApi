import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAttackVectorDto } from './dto/create-attack-vector.dto';
import { AttackVector } from './schemas/attack-vector.schema';

@Injectable()
export class AttackVectorsService {
  constructor(@InjectModel(AttackVector.name) private readonly model: Model<AttackVector>) {}

  async create(createDto: CreateAttackVectorDto): Promise<AttackVector> {
    return this.model.create(createDto);
  }

  async findAll(): Promise<AttackVector[]> {
    return this.model.find().exec();
  }

  async findOne(id: string): Promise<AttackVector> {
    const record = await this.model.findById(id).exec();
    if (!record) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return record;
  }

  async update(id: string, updateDto: CreateAttackVectorDto): Promise<AttackVector> {
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
