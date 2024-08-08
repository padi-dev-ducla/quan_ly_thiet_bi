import { Service } from 'typedi'
import bcrypt from 'bcrypt'
import UserEntity from '../models/users.entity'

@Service()
export class UserService {
  async getUsers() {
    const user = await UserEntity.findAll()
    return user
  }

  async getUserByEmail(email: string) {
    const user = await UserEntity.findOne({ where: { email } })
    return user
  }

  async comparePassword(inputPass: string, userPass: string) {
    return await bcrypt.compare(inputPass, userPass)
  }
}
