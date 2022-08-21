import { useQuery } from 'react-query';

import { getPodcastDetail } from '../services/podcast.service';


export const useGetPodcastDetails = (id: string) => {
  return useQuery('podcastsDetails', () => getPodcastDetail(id));
};