import cors from "cors";
import { config } from "../utils/config.js";

export const corsMiddleware = cors({
    origin: [config.frontend_url],
    credentials: true,
    optionsSuccessStatus: 200,
});
