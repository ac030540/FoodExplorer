const liveHost = "https://food-explorer-backend.vercel.app";
const localHost = "http://192.168.1.102:3000";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
