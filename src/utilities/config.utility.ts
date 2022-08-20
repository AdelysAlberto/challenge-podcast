interface IConfig {
  enviroment: string,
  podcast_100: string,
  cache_time: number,
}

const configEnv: IConfig = {
  enviroment: process.env.REACT_APP_ENV || 'development',
  podcast_100: `${process.env.REACT_APP_ITUNES_URL}/limit=${process.env.REACT_APP_PODCAST_LIMIT}/genre=${process.env.REACT_APP_PODCAST_GENRE}/json`,
  cache_time: (process.env.REACT_APP_CACHE_TIME as unknown) as number,
}

export default configEnv;