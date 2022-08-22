export interface IConfig {
  enviroment: string,
  podcast_100: string,
  cache_time: number,
  podcast_details: (id: string) => string,
  podcast_feed: (url: string) => string,
}


export type TFunction = (k: string) => string;
export type TFunctionTIme = (k: number) => string;