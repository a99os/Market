import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Branches } from '../branches/branches.model';
interface WorkersAttr {
  name: string;
  phoneNumber: string;
  branchId: number;
}
@Table({ tableName: 'workers' })
export class Workers extends Model<Workers, WorkersAttr> {
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
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phoneNumber: string;

  @ForeignKey(() => Branches)
  @Column({
    field: 'id',
  })
  branchId: number;
}
