import { Body, JsonController, Post, Res, UseBefore } from 'routing-controllers'
import { Service } from 'typedi'
import { Response } from 'express'
import { BaseController } from './base.controller'
import { LoginDto } from 'src/dtos/auth.dto'
import validationMiddleware from '../middlewares/validation.middleware'
import { AuthService } from '@service/auth.service'
import { TokenService } from '@service/token.service'

@JsonController('/auth')
@Service()
export class AuthController extends BaseController {
  private readonly authService = new AuthService()
  private readonly tokenService = new TokenService()

  constructor() {
    super()
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const user = await this.authService.login(loginDto.email, loginDto.password)
      const token = await this.tokenService.generateAuthTokens(user)
      return this.setMessage('Đăng nhập thành công')
        .setData({ user: { email: user.email, password: user.password }, token })
        .responseSuccess(res)
    } catch (e) {
      return this.setCode(e.httpCode).setMessage(e.message).responseErrors(res)
    }
  }
}
