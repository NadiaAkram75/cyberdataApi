import { Module } from '@nestjs/common';
import { ThreatIntelligenceService } from './threat-intelligence.service';
import { ThreatIntelligenceController } from './threat-intelligence.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ThreatIntelligence, ThreatIntelligenceSchema } from './schemas/threat-intelligence.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ThreatIntelligence.name, schema: ThreatIntelligenceSchema }]),
  ],
  controllers: [ThreatIntelligenceController],
  providers: [ThreatIntelligenceService],
})
export class ThreatIntelligenceModule {}
