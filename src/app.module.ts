import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketsModule } from './markets/markets.module';
import { BranchesModule } from './branches/branches.module';
import { ProductsModule } from './products/products.module';
import { WorkersModule } from './workers/workers.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'mouse.db.elephantsql.com',
      port: 3306,
      username: 'aeykzcag',
      password: 'ursBuyUseOR1nwE3YI3VNs3xzOI0qClu',
      database: 'aeykzcag',
      models: [],
    }),
    ,
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
