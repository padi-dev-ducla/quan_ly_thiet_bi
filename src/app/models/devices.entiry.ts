import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript'

@Table({ tableName: 'devices' })
export default class DeviceEntity extends Model<DeviceEntity> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Column(DataType.INTEGER)
  userId: number

  @Column(DataType.STRING)
  machineCode: string

  @Column(DataType.STRING)
  model: string

  @Column(DataType.STRING)
  serial: string

  @Column(DataType.STRING)
  manufacturer: string

  @Column(DataType.STRING)
  country: string

  @Column(DataType.STRING)
  weight: string

  @Column(DataType.STRING)
  location: string

  @Column(DataType.STRING)
  size: string

  @Column(DataType.STRING)
  part: string

  @Column(DataType.STRING)
  structure: string

  @Column(DataType.STRING)
  specifications: string

  @Column(DataType.STRING)
  quantity: string

  @Column(DataType.STRING)
  parameter: string

  @Column(DataType.STRING)
  deviceType: string

  @Column(DataType.STRING)
  productionType: string

  @Column(DataType.STRING)
  typeOfDevice: string

  @Column(DataType.STRING)
  image: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
