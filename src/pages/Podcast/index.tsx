import { FC } from 'react'
import { useParams } from 'react-router-dom';
import LayoutDefault from '../../adapters/layouts/default/index';
import { parseDate, parseTime } from '../../utilities/validations.utility';
import Container from './Container';
import { useGetPodcastDetails } from './hooks/usePodcast';
import { IPodcast } from './interfaces/podcast.interface';

const Podcast: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetPodcastDetails(id as string);


  return (
    <LayoutDefault>
      {isLoading || isFetching ?
        (<div>Loading...</div>)
        : (
          <Container data={data as IPodcast} />
        )
      }

    </LayoutDefault>

  );
}

export default Podcast;