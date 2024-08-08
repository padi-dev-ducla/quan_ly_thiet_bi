import { Service } from 'typedi'
import DeviceEntity from '../models/devices.entiry'
import { IDeviceInsert } from '@interfaces/device.interface'

@Service()
export class DeviceService {
  async getAll() {
    const data = await DeviceEntity.findAll().catch((e) => console.log(e))
    return data
  }

  async getOne(id: number) {
    const data = await DeviceEntity.findOne({
      where: {
        id: id,
      },
    }).catch((e) => console.log(e))
    return data
  }
  async create(dtoInsert: IDeviceInsert) {
    const dataInsert = await DeviceEntity.create(dtoInsert)
    return dataInsert
  }
}
