
import { AxiosRequestHeaders } from 'axios';

export interface IResponseRequest {
  data?: any;
  status: number;
  statusText?: string;
}

export interface IAxiosError {
  response: {
    data: { message: string },
    statusText?: string,
    status: number
  }
}

export interface IRequest {
  get: (url: string, headers?: AxiosRequestHeaders) => Promise<IResponseRequest>
}

