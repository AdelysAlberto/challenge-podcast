import { useQuery } from 'react-query';
import { getPodcast } from '../services/home.service';
import { IPodCastList } from '../interfaces/index';


export const useGetPodcastList = (query: string) => {
  return useQuery(
    ['podcasts'],
    () => getPodcast(),
    {
      select: (podcasts) => {
        return podcasts.feed.entry.filter((podcast: IPodCastList) => {
          return podcast['im:artist']?.label?.toLowerCase().includes(query.toLowerCase()) ||
            podcast['title']?.label?.toLowerCase().includes(query.toLowerCase())
        })
      },
    }
  );
};