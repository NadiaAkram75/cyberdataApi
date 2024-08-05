import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncidentReportsService } from './incident-reports.service';
import { IncidentReportsController } from './incident-reports.controller';
import { IncidentReport, IncidentReportSchema } from './schemas/incident-report.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: IncidentReport.name, schema: IncidentReportSchema }])],
  controllers: [IncidentReportsController],
  providers: [IncidentReportsService],
})
export class IncidentReportsModule {}
