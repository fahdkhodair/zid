import { syncQueue } from "./queue";
import { SyncJobPayload } from "./queue.types";

export const addSyncJob = async (payload: SyncJobPayload) => {
  return syncQueue.add(payload.type, payload, {
    jobId: `${payload.source}-${payload.type}-${payload.entityId}`,
  });
};