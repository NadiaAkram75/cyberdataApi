import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific attack vector by ID' })
  @ApiResponse({ status: 200, description: 'The record with the given ID', type: AttackVector })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findOne(@Param('id') id: string): Promise<AttackVector> {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a specific attack vector by ID' })
  @ApiResponse({ status: 200, description: 'The updated record', type: AttackVector })
  @ApiResponse({ status: 404, description: 'Not Found' })
  update(@Param('id') id: string, @Body() updateDto: CreateAttackVectorDto): Promise<AttackVector> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific attack vector by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
