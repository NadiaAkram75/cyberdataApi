import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ThreatIntelligenceService } from './threat-intelligence.service';
import { CreateThreatIntelligenceDto } from './dto/create-threat-intelligence.dto';
import { UpdateThreatIntelligenceDto } from './dto/update-threat-intelligence.dto';
import { ThreatIntelligence } from './schemas/threat-intelligence.schema';

@ApiTags('threat-intelligence')
@Controller('threat-intelligence')
export class ThreatIntelligenceController {
  constructor(private readonly threatService: ThreatIntelligenceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new threat intelligence record' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: ThreatIntelligence })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createDto: CreateThreatIntelligenceDto): Promise<ThreatIntelligence> {
    return this.threatService.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all threat intelligence records' })
  @ApiResponse({ status: 200, description: 'List of threat intelligence records', type: [ThreatIntelligence] })
  findAll(): Promise<ThreatIntelligence[]> {
    return this.threatService.findAll();
  }

  @Get(':threatId')
  @ApiOperation({ summary: 'Retrieve a specific threat intelligence record by ID' })
  @ApiResponse({ status: 200, description: 'The record with the given ID', type: ThreatIntelligence })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findOne(@Param('threatId') threatId: string): Promise<ThreatIntelligence> {
    return this.threatService.findOne(threatId);
  }

  // @Put(':id')
  // @ApiOperation({ summary: 'Update a specific threat intelligence record by ID' })
  // @ApiResponse({ status: 200, description: 'The updated record', type: ThreatIntelligence })
  // @ApiResponse({ status: 404, description: 'Not Found' })
  // update(@Param('id') id: string, @Body() updateDto: UpdateThreatIntelligenceDto): Promise<ThreatIntelligence> {
  //   return this.threatService.update(id, updateDto);
  // }

  @Delete(':threatId')
  @ApiOperation({ summary: 'Delete a specific threat intelligence record by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  delete(@Param('threatId') threatId: string): Promise<any> {
    return this.threatService.delete(threatId);
  }
}
