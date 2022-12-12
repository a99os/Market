import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketsModule } from './markets/markets.module';
import { BranchesModule } from './branches/branches.module';
import { ProductsModule } from './products/products.module';
import { WorkersModule } from './workers/workers.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Market } from './markets/market.model';
import { Branches } from './branches/branches.model';
import { Products } from './products/products.model';
import { Workers } from './workers/workers.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'mouse.db.elephantsql.com',
      port: 5432,
      username: 'jjlpnsau',
      password: 'kpsCg8A_AnYOo0raWbEvxUxe1RaPZaUR',
      database: 'jjlpnsau',
      models: [Market, Branches, Products, Workers],
      autoLoadModels: true,
      logging: false,
    }),
    ConfigModule.forRoot(),
    MarketsModule,
    BranchesModule,
    ProductsModule,
    WorkersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
