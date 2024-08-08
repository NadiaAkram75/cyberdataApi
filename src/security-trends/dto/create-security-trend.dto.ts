import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, IsDate } from 'class-validator';

export class CreateSecurityTrendDto {

  @ApiProperty({ description: 'Trend ID' })
  @IsString()
  trendId: string;


  @ApiProperty({ description: 'Name of the security trend' })
  @IsString()
  trendName: string;

  @ApiProperty({ description: 'Description of the security trend' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Start date of the trend', required: false })
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @ApiProperty({ description: 'End date of the trend', required: false })
  @IsOptional()
  @IsDate()
  endDate?: Date;

  @ApiProperty({ description: 'Related incidents', type: [String], required: false })
  @IsOptional()
  @IsArray()
  relatedIncidents?: string[];

  @ApiProperty({ description: 'Analysis of the trend', required: false })
  @IsOptional()
  @IsString()
  analysis?: string;
}
