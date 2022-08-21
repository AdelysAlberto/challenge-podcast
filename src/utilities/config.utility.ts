import { IConfig } from "./interfaces/config.interface";


const configEnv: IConfig = {
  enviroment: process.env.REACT_APP_ENV || 'development',
  podcast_100: `${process.env.REACT_APP_ITUNES_URL}/limit=${process.env.REACT_APP_PODCAST_LIMIT}/genre=${process.env.REACT_APP_PODCAST_GENRE}/json`,
  podcast_details: (id) => `${process.env.REACT_APP_PROXY}url=${process.env.REACT_APP_PODCAST_DETAIL_URL}id=${id}`,
  podcast_feed: (url) => `${process.env.REACT_APP_PROXY}url=${url}`,
  cache_time: (process.env.REACT_APP_CACHE_TIME as unknown) as number,
}

export default configEnv;