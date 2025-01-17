import { Query, Resolver } from '@nestjs/graphql';
import { FlowersGraphqlService } from './flowers-graphql.service';
import { PrismaService } from 'src/prisma.service';
import { ConfigService } from '@nestjs/config';
import { FlowersService } from 'src/flowers/flowers.service';
import { FlowerModel } from './flower.model';

@Resolver()
export class FlowersGraphqlResolver {
  constructor(private readonly flowersService: FlowersService) {}


  @Query(() => [FlowerModel], {name: 'flowers'})
  findAll() {
    return this.flowersService.findAll()
  }
}
