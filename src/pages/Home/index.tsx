import { FC } from 'react'
import LayoutDefault from '../../adapters/layouts/default/index';
import BaseInput from '../../baseComponents/BaseInput';
import Cards from './Cards';

import styles from './home.module.scss';

const Home: FC = () => {
  return (
    <LayoutDefault >
      <div className='container'>
        <div className={styles.search}>
          <BaseInput placerholder='Filter podcast...' />
        </div>
        <Cards />
      </div>
    </LayoutDefault>

  );
}

export default Home;