import { FC } from 'react'

import BaseInput from '../../baseComponents/BaseInput';
import Cards from './components/Cards';

import styles from './styles/home.module.scss';

import { IPodCastList } from './interfaces/index';
const Container: FC<{ cards: IPodCastList[], onChange?: any }> = ({ cards, onChange }) => {

  return (
    <div className='container'>
      <div className={styles.search}>
        <BaseInput placerholder='Filter podcast...' onChange={onChange} />
      </div>
      <div className={styles.cards}>
        {
          cards && cards.map((card, key) => (
            <Cards key={key} card={card} />
          ))
        }
      </div>
    </div>
  );
}

export default Container;