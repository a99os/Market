import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Market } from '../markets/market.model';
interface BranchesAttr {
  name: string;
  address: string;
  marketId: number;
}
@Table({ tableName: 'branches' })
export class Branches extends Model<Branches, BranchesAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ForeignKey(() => Market)
  @Column({
    field: 'id',
  })
  marketId: number;
}
