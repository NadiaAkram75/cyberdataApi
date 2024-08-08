import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateAttackVectorDto {
  @ApiProperty({ description: 'Name of the attack vector' })
  @IsString()
  vectorName: string;

  @ApiProperty({ description: 'Description of the attack vector' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Unique identifier for the attack vector', required: false })
  @IsOptional()
  @IsString()
  externalId?: string;

  @ApiProperty({ description: 'Techniques used by this attack vector', type: [String], required: false })
  @IsOptional()
  @IsArray()
  techniques?: string[];

  @ApiProperty({ description: 'Mitigation strategies for this attack vector', type: [String], required: false })
  @IsOptional()
  @IsArray()
  mitigationStrategies?: string[];

  @ApiProperty({ description: 'Examples of attacks using this vector', type: [String], required: false })
  @IsOptional()
  @IsArray()
  examples?: string[];
}
