import { env } from "./env";

export const integrations = {
  zid: {
    baseURL: env.ZID_API_URL,
    accessToken: env.ZID_ACCESS_TOKEN,
  },

  foodics: {
    baseURL: env.FOODICS_API_URL,
    clientId: env.FOODICS_CLIENT_ID,
    clientSecret: env.FOODICS_CLIENT_SECRET,
  },

  shipping: {
    baseURL: env.SHIPPING_API_URL,
    apiKey: env.SHIPPING_API_KEY,
  },
};
