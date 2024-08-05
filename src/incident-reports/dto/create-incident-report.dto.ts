import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateIncidentReportDto {
  @ApiProperty({ description: 'Incident ID' })
  @IsString()
  incidentId: string;

  @ApiProperty({ description: 'Type of the incident' })
  @IsString()
  incidentType: string;

  @ApiProperty({ description: 'Description of the incident', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Affected entities', type: [String], required: false })
  @IsOptional()
  @IsArray()
  affectedEntities?: string[];

  @ApiProperty({ description: 'Date when the incident occurred', required: false })
  @IsOptional()
  @IsDate()
  dateOccurred?: Date;

  @ApiProperty({ description: 'Impact of the incident', required: false })
  @IsOptional()
  @IsString()
  impact?: string;

  @ApiProperty({ description: 'Response to the incident', required: false })
  @IsOptional()
  @IsString()
  response?: string;
}
