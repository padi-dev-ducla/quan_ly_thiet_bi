import { Service } from 'typedi'
import { UserService } from '@service/user.service'
import { BadRequestError, UnauthorizedError } from 'routing-controllers'
import bcrypt from 'bcrypt'
import UserEntity from '../models/users.entity'

@Service()
export class AuthService {
  private readonly userService = new UserService()

  async login(email: string, password: string) {
    const user = await UserEntity.findOne({ where: { email } })

    if (!user) {
      throw new BadRequestError('Email không tồn tại')
    }

    if (!(await bcrypt.compare(password, user.password))) {

      throw new UnauthorizedError('Mật khẩu không đúng')
    }
    
    return user
  }
}
