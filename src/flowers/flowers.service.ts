import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FlowersCreateDto } from './flower.dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/type';

@Injectable()
export class FlowersService {
    constructor(private readonly prisma:PrismaService, private readonly configService:ConfigService) {}


    findAll() {
        console.log(this.configService.get<EnumAppMode>('MODE'))
        return this.prisma.flower.findMany()
    }

    create(dto: FlowersCreateDto) {
        return this.prisma.flower.create({
            data: dto,
        })
    }
}
