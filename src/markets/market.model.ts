import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface MarketCreationAttrs {
  name: string;
}
@Table({ tableName: 'markets' })
export class Market extends Model<Market, MarketCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
}
