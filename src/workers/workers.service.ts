import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Workers } from './workers.model';

@Injectable()
export class WorkersService {
  constructor(@InjectModel(Workers) private workersRepo: typeof Workers) {}
  create(createWorkerDto: CreateWorkerDto) {
    return this.workersRepo.create(createWorkerDto);
  }

  findAll() {
    return this.workersRepo.findAll();
  }

  findOne(id: number) {
    return this.workersRepo.findOne({ where: { id } });
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workersRepo.update(updateWorkerDto, { where: { id } });
  }

  remove(id: number) {
    return this.workersRepo.destroy({ where: { id } });
  }
}
