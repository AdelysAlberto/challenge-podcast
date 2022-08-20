import { useQuery } from 'react-query';
import { getPodCast } from '../services/api.service';
import { IPodCastList } from '../interfaces/index';


export const useGetPodCastList = (query: string) => {
  return useQuery(
    ['podcasts'],
    () => getPodCast(),
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