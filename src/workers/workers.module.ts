import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from '../products/products.model';
import { Market } from '../markets/market.model';
import { Branches } from '../branches/branches.model';
import { Workers } from './workers.model';

@Module({
  imports: [SequelizeModule.forFeature([Products, Market, Branches, Workers])],
  controllers: [WorkersController],
  providers: [WorkersService],
})
export class WorkersModule {}
