
import axios, { AxiosInstance } from "axios";

class ShippingClient {
  private readonly client: AxiosInstance;

  constructor() {
    const baseURL = process.env.SHIPPING_API_BASE_URL;
    const token = process.env.SHIPPING_API_TOKEN;

    if (!baseURL || !token) {
      throw new Error("Shipping API configuration is missing");
    }

    this.client = axios.create({
      baseURL,
      timeout: Number(process.env.API_TIMEOUT) || 15000,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(url: string): Promise<T> {
    const response = await this.client.get<T>(url);
    return response.data;
  }

  async post<T, D>(url: string, data: D): Promise<T> {
    const response = await this.client.post<T>(url, data);
    return response.data;
  }

  async patch<T, D>(url: string, data: D): Promise<T> {
    const response = await this.client.patch<T>(url, data);
    return response.data;
  }
}

export const shippingClient = new ShippingClient();
