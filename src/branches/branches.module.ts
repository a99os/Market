import { Module } from '@nestjs/common';
import { BranchesService } from './branches.service';
import { BranchesController } from './branches.controller';
import { Products } from '../products/products.model';
import { Market } from '../markets/market.model';
import { Branches } from './branches.model';
import { Workers } from '../workers/workers.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Products, Market, Branches, Workers])],
  controllers: [BranchesController],
  providers: [BranchesService],
})
export class BranchesModule {}
