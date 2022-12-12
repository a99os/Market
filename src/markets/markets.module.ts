import { Module } from '@nestjs/common';
import { MarketsService } from './markets.service';
import { MarketsController } from './markets.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from '../products/products.model';
import { Market } from './market.model';
import { Branches } from '../branches/branches.model';
import { Workers } from '../workers/workers.model';

@Module({
  imports: [SequelizeModule.forFeature([Products, Market, Branches, Workers])],

  controllers: [MarketsController],
  providers: [MarketsService],
})
export class MarketsModule {}
