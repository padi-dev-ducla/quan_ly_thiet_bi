import { Body, Get, JsonController, Post, QueryParams, Req, Res } from 'routing-controllers'
import { Service } from 'typedi'
import { BaseController } from './base.controller'
import { CategoryDeviceService } from '@service/category_device.service'

@JsonController('/category-device')
@Service()
export class CategoryDeviceController extends BaseController {
  private readonly categoryDeviceService = new CategoryDeviceService()

  @Get('/list')
  async getAll(@Res() res: Response) {
    const dataAll = await this.categoryDeviceService.getAll()
    return this.setData(dataAll).setMessage('Success').responseSuccess(res)
  }

  @Get('/detail')
  async getOne(@QueryParams() queryParams: { id: number }, @Res() res: Response) {
    const data = await this.categoryDeviceService.getOne(queryParams.id)
    return this.setData(data).setMessage('Success').responseSuccess(res)
  }

  @Post('/create')
  async create(
    @Req() req: Request,
    @Body() body: { title: string; nominal: string; online: string },
    @Res() res: Response,
  ) {
    const dataInsert = await this.categoryDeviceService.create(body)
    return this.setData(dataInsert).setMessage('Success').responseSuccess(res)
  }
}
