import dotenv from "dotenv";

dotenv.config(".env");

const port = process.env.PORT || 5000;
const mongodb_url = process.env.MONGODB_URL;
const jwt_access_secret = process.env.JWT_ACCESS_SECRET;
const jwt_refresh_secret = process.env.JWT_REFRESH_SECRET;
const origin = process.env.ORIGIN || "http://localhost:3000";

export { port, mongodb_url, jwt_access_secret, jwt_refresh_secret, origin };
