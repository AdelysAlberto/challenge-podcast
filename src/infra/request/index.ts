import axios from 'axios';

import { IAxiosError, IRequest } from './interfaces/index';
import { loadAbort } from '../../utilities/loadAbort.utility';


const request: IRequest = {
  get: async (url, headers) => {
    const controller = loadAbort();
    const config = {
      headers,
      signal: controller.signal
    };
    try {
      const response = await axios.get(url, config);
      const { status, data } = response;
      return { data, status };
    }
    catch (err) {
      const { response } = err as IAxiosError;
      const status = response?.status;
      const statusText = response?.data.message;
      return {
        status,
        statusText
      };
    }
  }

}

export default request;
