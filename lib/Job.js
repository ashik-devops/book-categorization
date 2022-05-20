import prismaClient from "./Prisma";
import { jobStatuses } from "../constants/Job";
export const createJob = async (
  payload,
  jobType,
  status = jobStatuses.PENDING
) => {
  return await prismaClient.job.create({
    data: {
      type: jobType,
      payload: payload,
      status: status,
    },
  });
};
