import axios from 'axios';
import { loadAbort } from '../../utilities/loadAbort.utility';
const controller = loadAbort();
const request = {

  get: (path: string, headers: Headers) => {
    axios.get(path, { signal: controller.signal, ...headers })
  }

}

export default request;
