import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateThreatIntelligenceDto {
  @ApiProperty({ description: 'Name of the threat intelligence' })
  @IsNotEmpty()
  @IsString()
  threatName: string;

  @ApiProperty({ description: 'Description of the threat intelligence', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'List of indicators of compromise', type: [String], required: false })
  @IsOptional()
  @IsArray()
  iocs?: string[];

  @ApiProperty({ description: 'List of threat actors', type: [String], required: false })
  @IsOptional()
  @IsArray()
  threatActors?: string[];

  @ApiProperty({ description: 'Source of the threat intelligence', required: false })
  @IsOptional()
  @IsString()
  source?: string;

  @ApiProperty({ description: 'Date when the threat intelligence was reported' })
  @IsNotEmpty()
  @IsDate()
  dateReported: Date;
}
