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

@Table({ tableName: 'category_devices' })
export default class CategoryDeviceEntity extends Model<CategoryDeviceEntity> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Column(DataType.STRING)
  title: string

  @Column(DataType.STRING)
  nominal: string

  @Column(DataType.STRING)
  online: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
