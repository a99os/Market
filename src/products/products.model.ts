import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Branches } from '../branches/branches.model';
interface ProductsAttr {
  title: string;
  price: number;
  branchId: number;
}

@Table({ tableName: 'products' })
export class Products extends Model<Products, ProductsAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => Branches)
  @Column({
    field: 'id',
  })
  branchId: number;
}
