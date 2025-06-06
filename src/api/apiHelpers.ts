import { AxiosError } from "axios";
import type { ApiError } from "./apiErrors";

export function mapAxiosError(error: unknown): ApiError {
  const e = error as AxiosError;
  if (e.response !== undefined) {
    const data = e.response.data as { message?: unknown };
    const messageText =
      typeof data?.message === "string" ? data.message : e.message;
    return { message: messageText, status: e.response.status };
  }
  return { message: e.message };
}