import { FC } from 'react'
import { Outlet, useParams } from 'react-router-dom';
import LayoutDefault from '../../adapters/layouts/default/index';
import { useGetPodcastDetails } from './hooks/usePodcast';

const Podcast: FC = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPodcastDetails(id as string);

  console.log(data)

  return (
    <LayoutDefault>
      PodCast  {id}

      <Outlet />
    </LayoutDefault>

  );
}

export default Podcast;