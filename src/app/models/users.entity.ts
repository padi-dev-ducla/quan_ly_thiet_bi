import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript'

@Table({ tableName: 'users' })
export default class UserEntity extends Model<UserEntity> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number

  @Column(DataType.STRING)
  name: string

  @Column(DataType.STRING)
  email: string

  @Column(DataType.STRING)
  password: string

  @Column(DataType.STRING)
  role: string

  @CreatedAt
  @Column
  createdAt!: Date

  @UpdatedAt
  @Column
  updatedAt!: Date
}
