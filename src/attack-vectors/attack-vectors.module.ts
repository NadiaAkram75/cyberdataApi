import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AttackVectorsService } from './attack-vectors.service';
import { AttackVectorsController } from './attack-vectors.controller';
import { AttackVector, AttackVectorSchema } from './schemas/attack-vector.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AttackVector.name, schema: AttackVectorSchema }])],
  controllers: [AttackVectorsController],
  providers: [AttackVectorsService],
})
export class AttackVectorsModule {}
