import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IncidentReportsService } from './incident-reports.service';
import { CreateIncidentReportDto } from './dto/create-incident-report.dto';
import { IncidentReport } from './schemas/incident-report.schema';

@ApiTags('incident-reports')
@Controller('incident-reports')
export class IncidentReportsController {
  constructor(private readonly service: IncidentReportsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new incident report' })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: IncidentReport })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createDto: CreateIncidentReportDto): Promise<IncidentReport> {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all incident reports' })
  @ApiResponse({ status: 200, description: 'List of incident reports', type: [IncidentReport] })
  findAll(): Promise<IncidentReport[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a specific incident report by ID' })
  @ApiResponse({ status: 200, description: 'The record with the given ID', type: IncidentReport })
  @ApiResponse({ status: 404, description: 'Not Found' })
  findOne(@Param('id') id: string): Promise<IncidentReport> {
    return this.service.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a specific incident report by ID' })
  @ApiResponse({ status: 200, description: 'The updated record', type: IncidentReport })
  @ApiResponse({ status: 404, description: 'Not Found' })
  update(@Param('id') id: string, @Body() updateDto: CreateIncidentReportDto): Promise<IncidentReport> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific incident report by ID' })
  @ApiResponse({ status: 200, description: 'The record has been successfully deleted' })
  @ApiResponse({ status: 404, description: 'Not Found' })
  delete(@Param('id') id: string): Promise<any> {
    return this.service.delete(id);
  }
}
