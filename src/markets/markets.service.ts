import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMarketDto } from './dto/create-market.dto';
import { UpdateMarketDto } from './dto/update-market.dto';
import { Market } from './market.model';

@Injectable()
export class MarketsService {
  constructor(@InjectModel(Market) private marketRepository: typeof Market) {}
  create(createMarketDto: CreateMarketDto) {
    return this.marketRepository.create(createMarketDto);
  }

  findAll() {
    return this.marketRepository.findAll();
  }

  findOne(id: number) {
    return this.marketRepository.findByPk(id);
  }

  update(id: number, updateMarketDto: UpdateMarketDto) {
    return this.marketRepository.update(updateMarketDto, { where: { id } });
  }

  remove(id: number) {
    return this.marketRepository.destroy({ where: { id } });
  }
}
