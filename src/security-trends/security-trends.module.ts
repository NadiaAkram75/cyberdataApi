import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SecurityTrendsService } from './security-trends.service';
import { SecurityTrendsController } from './security-trends.controller';
import { SecurityTrend, SecurityTrendSchema } from './schemas/security-trend.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: SecurityTrend.name, schema: SecurityTrendSchema }])],
  controllers: [SecurityTrendsController],
  providers: [SecurityTrendsService],
})
export class SecurityTrendsModule {}
