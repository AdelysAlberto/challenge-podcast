import { FC } from 'react'
import LayoutDefault from '../../adapters/layouts/default/index';
import Cards from './Cards';

import styles from './home.module.scss';

const Home: FC = () => {
  return (
    <LayoutDefault >
      <div className='container'>
        <div className={styles.search}>
          <input type={'text'} placeholder="Filter podcast..." />
        </div>
        <Cards />
      </div>
    </LayoutDefault>

  );
}

export default Home;