import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MarketsService } from './markets.service';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';

@Controller('markets')
export class MarketsController {
  constructor(private readonly marketsService: MarketsService) {}

  @Post()
  create(@Body() createMarketDto: CreateMarketDto) {
    return this.marketsService.create(createMarketDto);
  }

  @Get()
  findAll() {
    return this.marketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMarketDto: UpdateMarketDto,
  ) {
    await this.marketsService.update(+id, updateMarketDto);
    return this.marketsService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const market = await this.marketsService.findOne(+id);
    await this.marketsService.remove(+id);
    return market;
  }
}
