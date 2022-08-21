export type IPodcastEpisodes = {
  title?: string,
  description?: string,
  pubDate?: string,
  'itunes:episodeType'?: string,
  'itunes:author'?: string,
  'itunes:image'?: { href?: string },
  'itunes:subtitle'?: string,
  'itunes:summary'?: string,
  'content:encoded'?: string,
  'itunes:duration'?: number,
  guid?: string,
  enclosure?: {
    url?: string,
    length?: string,
    type?: string,
  }
}

export interface IPodcast {
  title?: string,
  subtitle?: string,
  author?: string,
  image?: string,
  description?: string
  episodes: IPodcastEpisodes[]
}

export type TFunction = (k: string) => string;
export type TFunctionTIme = (k: number) => string;