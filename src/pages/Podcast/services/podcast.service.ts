import request from '../../../infra/request/index';
import configEnv from '../../../utilities/config.utility';
import convert from 'xml-js';
import { parsePodcastDetail } from '../adapters/podcast.adapter';


const getFeed = async (url: string) => {
  const { data, statusText } = await request.get(configEnv.podcast_feed(url));
  if (statusText) {
    return statusText;
  }

  const result = JSON.parse(convert.xml2json(data.contents, { compact: false, spaces: 4 }));

  return parsePodcastDetail(result)

}

// Get the podcast details and later get the feed podcast
const getPodcastDetail = async (id: string) => {
  const { data, statusText } = await request.get(configEnv.podcast_details(id));
  if (statusText) {
    return statusText;
  }

  const parsed = JSON.parse(data.contents);

  const feedUrl = parsed.results[0].feedUrl;

  return getFeed(feedUrl);
}

export {
  getPodcastDetail
}