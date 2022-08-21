import request from '../../../infra/request/index';
import configEnv from '../../../utilities/config.utility';

const getPodcast = async () => {

  const { data, statusText } = await request.get(configEnv.podcast_100);
  if (statusText) {
    return statusText;
  }
  return data;
}

export {
  getPodcast
}