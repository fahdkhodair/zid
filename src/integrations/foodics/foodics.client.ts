import axios, {
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";

import { IFoodicsConfig } from "./foodics.types";

export class FoodicsClient {
  private readonly client: AxiosInstance;

  constructor(config: IFoodicsConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: Number(process.env.API_TIMEOUT) || 15000,

      headers: {
        Authorization: `Bearer ${config.accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.post<T>(
      url,
      data,
      config
    );

    return response.data;
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.put<T>(
      url,
      data,
      config
    );

    return response.data;
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await this.client.delete<T>(
      url,
      config
    );

    return response.data;
  }
}