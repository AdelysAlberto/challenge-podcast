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
  'itunes:duration'?: string,
  guid?: string,
  enclosure?: {
    url?: string,
    length?: string,
    type?: string,
  }
}

export interface IPodcast {
  title?: string,
  description?: string
  episodes: IPodcastEpisodes[]
}

