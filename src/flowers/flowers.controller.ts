import { Body, Controller, Get, Post, Query, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseInPipe } from 'src/conception/pipe';
import { AuthGuard } from 'src/conception/guard';
import { LoggingInterceptor } from 'src/conception/interceptors';
import { FlowersCreateDto } from './flower.dto';

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}


  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.flowersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  create(@Body() dto: FlowersCreateDto) {
    return this.flowersService.create(dto);
  }


  
}
