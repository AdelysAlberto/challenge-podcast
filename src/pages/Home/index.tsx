import { FC } from 'react'
import LayoutDefault from '../../adapters/layouts/default/index';
import BaseInput from '../../baseComponents/BaseInput';
import Cards from './components/Cards';

import styles from './styles/home.module.scss';

const Home: FC = () => {
  interface ICard {
    title: string
  }

  const array: ICard[] = [
    { title: "Card One" },
    { title: "Card Two" },
    { title: "Card Threee" },
    { title: "Card Four" },
    { title: "Card Six" },
    { title: "Card Seven" },
    { title: "Card Eight" },
  ];

  return (
    <LayoutDefault >
      <div className='container'>
        <div className={styles.search}>
          <BaseInput placerholder='Filter podcast...' />
        </div>
        <div className={styles.cards}>
          {
            array.map((card, key) => (
              <Cards key={key} card={card} />
            ))
          }

        </div>
      </div>
    </LayoutDefault>

  );
}

export default Home;