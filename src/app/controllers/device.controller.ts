import { Body, Get, JsonController, Post, QueryParams, Res } from 'routing-controllers'
import { Service } from 'typedi'
import { UserService } from '@service/user.service'
import { BaseController } from './base.controller'
import { DeviceService } from '@service/device.service'
import { DeviceInsertDto } from '@dtos/device.dto'

@JsonController('/device')
@Service()
export class DeviceController extends BaseController {
  private readonly deviceService = new DeviceService()

  @Get('/list')
  async getAll(@Res() res: Response) {
    const dataAll = await this.deviceService.getAll()
    return this.setData(dataAll).setMessage('Success').responseSuccess(res)
  }

  @Get('/detail')
  async getOne(@QueryParams() queryParams: { id: number }, @Res() res: Response) {
    const data = await this.deviceService.getOne(queryParams.id)
    return this.setData(data).setMessage('Success').responseSuccess(res)
  }

  @Post('/create')
  async create(
    @Body()
    body: DeviceInsertDto,
    @Res() res: Response,
  ) {
    const dataInsert = await this.deviceService.create(body)
    return this.setData(dataInsert).setMessage('Success').responseSuccess(res)
  }
}
