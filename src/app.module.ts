import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ThreatIntelligenceModule } from './threat-intelligence/threat-intelligence.module';
import { VulnerabilityDatabasesModule } from './vulnerability-database/vulnerability-database.module';
import { IncidentReportsModule } from './incident-reports/incident-reports.module';
import { AttackVectorsModule } from './attack-vectors/attack-vectors.module';
import { SecurityTrendsModule } from './security-trends/security-trends.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Ensure this is called before MongooseModule
    MongooseModule.forRoot(process.env.MONGO_URI),
    ThreatIntelligenceModule,
    VulnerabilityDatabasesModule,
    IncidentReportsModule,
    AttackVectorsModule,
    SecurityTrendsModule,
  ],
})
export class AppModule {}
