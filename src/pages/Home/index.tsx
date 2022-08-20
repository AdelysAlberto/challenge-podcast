import { FC, useState } from 'react'
import LayoutDefault from '../../adapters/layouts/default/index';
import Container from './Container';
import { useGetPodCastList } from './hooks/usePodCast';

const Home: FC = () => {

  const [filters, setFilters] = useState('');
  const { data, isLoading, error } = useGetPodCastList(filters);

  const onChange = (value: string) => {
    setFilters(value)
  }

  return (
    <LayoutDefault isLoading={isLoading}>
      {error ? (
        <div>
          Error while get the Podcast List
        </div>)
        :
        (<Container cards={data} onChange={onChange} />)
      }
    </LayoutDefault>
  );
}

export default Home;