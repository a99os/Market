import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarketsModule } from './markets/markets.module';
import { BranchesModule } from './branches/branches.module';

@Module({
  imports: [MarketsModule, BranchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
