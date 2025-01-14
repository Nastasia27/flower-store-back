import { Injectable } from '@nestjs/common';
import { CreateMicroserviceDto } from './dto/create-microservice.dto';
import { UpdateMicroserviceDto } from './dto/update-microservice.dto';

@Injectable()
export class MicroserviceService {
  handleMessage(message: string) {
    console.log('microservice: ', message)
  }
}
