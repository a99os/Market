import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Branches } from './branches.model';
import { CreateBranchDto } from './dto/create-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchesService {
  constructor(
    @InjectModel(Branches) private branchesRepository: typeof Branches,
  ) {}
  create(createBranchDto: CreateBranchDto) {
    return this.branchesRepository.create(createBranchDto);
  }

  findAll() {
    return this.branchesRepository.findAll();
  }

  findOne(id: number) {
    return this.branchesRepository.findOne({ where: { id } });
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return this.branchesRepository.update(UpdateBranchDto, { where: { id } });
  }

  remove(id: number) {
    return this.branchesRepository.destroy({ where: { id } });
  }
}
