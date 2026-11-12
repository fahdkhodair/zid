import { SyncLog } from "./sync-log.model";

import {
  ICreateSyncLogDTO,
  IUpdateSyncLogDTO,
} from "./sync-log.types";

export class SyncLogRepository {
  async create(data: ICreateSyncLogDTO) {
    return SyncLog.create(data);
  }

  async findByEventId(
    source: string,
    eventId: string
  ) {
    return SyncLog.findOne({
      source: source as "zid" | "foodics" | "shipping",
      eventId,
    });
  }

  async findById(id: string) {
    return SyncLog.findById(id);
  }

  async findAll() {
    return SyncLog.find().sort({
      createdAt: -1,
    });
  }

  async findByStatus(status: string) {
    return SyncLog.find({ 
      status: status as "pending" | "processing" | "success" | "failed" | "retrying"
    }).sort({
      createdAt: -1,
    });
  }

  async updateById(
    id: string,
    data: IUpdateSyncLogDTO
  ) {
    return SyncLog.findByIdAndUpdate(
      id,
      { $set: data },
      {
        new: true,
        runValidators: true,
      }
    );
  }
}