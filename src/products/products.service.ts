import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Products) private productsRepo: typeof Products) {}
  create(createProductDto: CreateProductDto) {
    return this.productsRepo.create(createProductDto);
  }

  findAll() {
    return this.productsRepo.findAll();
  }

  findOne(id: number) {
    return this.productsRepo.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productsRepo.update(updateProductDto, { where: { id } });
  }

  remove(id: number) {
    return this.productsRepo.destroy({ where: { id } });
  }
}
