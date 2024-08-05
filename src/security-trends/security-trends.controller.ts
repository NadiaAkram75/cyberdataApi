import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SecurityTrendsService } from './security-trends.service';
import { CreateSecurityTrendDto } from './dto/create-security-trend.dto';
import { SecurityTrend } from './schemas/security-trend.schema';

@ApiTags('security-trends')
@Controller('security-trends')
export class SecurityTrendsController {
  constructor(private readonly service: SecurityTrendsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new security trend' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: SecurityTrend })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createDto: CreateSecurityTrendDto): Promise<SecurityTrend> {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all security trends' })
  @ApiResponse({ status: 200, description: 'List of security trends', type: [SecurityTrend] })
  findAll(): Promise<SecurityTrend[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific security trend by ID' })
  @ApiResponse({ status: 200, description: 'The record with the given ID', type: SecurityTrend })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findOne(@Param('id') id: string): Promise<SecurityTrend> {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a specific security trend by ID' })
  @ApiResponse({ status: 200, description: 'The updated record', type: SecurityTrend })
  @ApiResponse({ status: 404, description: 'Not Found' })
  update(@Param('id') id: string, @Body() updateDto: CreateSecurityTrendDto): Promise<SecurityTrend> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific security trend by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
