import { Service } from 'typedi'
import DeviceEntity from '../models/devices.entiry'
import CategoryDeviceEntity from '../models/category_devices.entity'

@Service()
export class CategoryDeviceService {
  async getAll() {
    const data = await CategoryDeviceEntity.findAll().catch((e) => console.log(e))
    return data
  }
  async getOne(id: number) {
    const data = await CategoryDeviceEntity.findOne({
      where: {
        id: id,
      },
    }).catch((e) => console.log(e))
    return data
  }

  async create(dtoInsert: { title: string; nominal: string; online: string }) {
    const dataInsert = await CategoryDeviceEntity.create(dtoInsert)
    return dataInsert
  }
}
