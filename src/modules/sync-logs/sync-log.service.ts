import { SyncLogRepository } from "./sync-log.repository";

import {
  ICreateSyncLogDTO,
  IUpdateSyncLogDTO,
} from "./sync-log.types";

export class SyncLogService {
  constructor(
    private readonly syncLogRepository: SyncLogRepository
  ) {}

  async createLog(data: ICreateSyncLogDTO) {
    const existingLog =
      await this.syncLogRepository.findByEventId(
        data.source,
        data.eventId
      );

    if (existingLog) {
      return existingLog;
    }

    return this.syncLogRepository.create(data);
  }

  async startSync(id: string) {
    return this.syncLogRepository.updateById(id, {
      status: "processing",
      startedAt: new Date(),
      attempts: 1,
    });
  }

  async markAsSuccess(
    id: string,
    responsePayload?: Record<string, unknown>
  ) {
    return this.syncLogRepository.updateById(id, {
      status: "success",
      responsePayload,
      completedAt: new Date(),
      errorMessage: undefined,
    });
  }

  async markAsFailed(
    id: string,
    errorMessage: string
  ) {
    const log = await this.syncLogRepository.findById(id);

    if (!log) {
      throw new Error("Sync log not found");
    }

    const attempts = log.attempts + 1;

    return this.syncLogRepository.updateById(id, {
      status:
        attempts < log.maxAttempts
          ? "retrying"
          : "failed",

      attempts,
      errorMessage,
    });
  }

  async getAllLogs() {
    return this.syncLogRepository.findAll();
  }

  async getFailedLogs() {
    return this.syncLogRepository.findByStatus("failed");
  }
}