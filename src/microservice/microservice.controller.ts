import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { MicroserviceService } from './microservice.service';
import { CreateMicroserviceDto } from './dto/create-microservice.dto';
import { UpdateMicroserviceDto } from './dto/update-microservice.dto';

@Controller()
export class MicroserviceController {
  constructor(private readonly microserviceService: MicroserviceService) {}

  @EventPattern('message')
  handleMessage(message: string) {
    this.microserviceService.handleMessage(message)
  }
}
