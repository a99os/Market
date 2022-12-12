import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products.model';
import { Market } from '../markets/market.model';
import { Branches } from '../branches/branches.model';
import { Workers } from '../workers/workers.model';

@Module({
  imports: [SequelizeModule.forFeature([Products, Market, Branches, Workers])],

  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
