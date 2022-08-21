import { FC } from 'react'
import { useParams } from 'react-router-dom';
import LayoutDefault from '../../adapters/layouts/default/index';
import Container from './Container';
import { useGetPodcastDetails } from './hooks/usePodcast';
import { IPodcast, TFunctionTIme } from './interfaces/podcast.interface';

const Podcast: FC = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetPodcastDetails(id as string);

  const parseTime: TFunctionTIme = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toUTCString().slice(18, 22);
  }

  const parseDate = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString();
  }

  return (
    <LayoutDefault>
      {isLoading || isFetching ?
        (<div>Loading...</div>)
        : (
          <Container parseTime={parseTime} parseDate={parseDate} data={data as IPodcast} />
        )
      }

    </LayoutDefault>

  );
}

export default Podcast;