import { Get, JsonController, Res } from 'routing-controllers'
import { Service } from 'typedi'
import { UserService } from '@service/user.service'
import { BaseController } from './base.controller'

@JsonController('/user')
@Service()
export class UserController extends BaseController {
  private readonly userService = new UserService()

  @Get('/list')
  async getAll(@Res() res: Response) {
    const users = await this.userService.getUsers()
    return this.setData(users).setMessage('Success').responseSuccess(res)
  }
}
