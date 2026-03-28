import { config } from "../utils/config.js";

const port = config.environment === "development" ? `:${config.port}` : ""
export const STATIC_UPLOAD_PREFIX = `${config.host}${port}/static/uploads/`;
