import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AttackVectorsService } from './attack-vectors.service';
import { CreateAttackVectorDto } from './dto/create-attack-vector.dto';
import { AttackVector } from './schemas/attack-vector.schema';

@ApiTags('attack-vectors')
@Controller('attack-vectors')
export class AttackVectorsController {
  constructor(private readonly service: AttackVectorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new attack vector' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: AttackVector })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createDto: CreateAttackVectorDto): Promise<AttackVector> {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all attack vectors' })
  @ApiResponse({ status: 200, description: 'List of attack vectors', type: [AttackVector] })
  findAll(): Promise<AttackVector[]> {
    return this.service.findAll();
  }

  @Get('by-external-id/:externalId')
  @ApiOperation({ summary: 'Retrieve a specific attack vector by external ID' })
  @ApiResponse({ status: 200, description: 'The record with the given externalId', type: AttackVector })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findOne(@Param('externalId') externalId: string): Promise<AttackVector> {
    return this.service.findByExternalId(externalId);
  }

  @Delete('by-external-id/:externalId')
  @ApiOperation({ summary: 'Delete a specific attack vector by external ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  delete(@Param('externalId') externalId: string): Promise<any> {
    return this.service.delete(externalId);
  }
}
