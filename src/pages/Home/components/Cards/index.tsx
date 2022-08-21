import { FC } from 'react';
import styles from './styles/card.module.scss';
import { cardAdapter } from '../../adapters/data.adapters';
import { ICard, IPodCastList } from '../../interfaces';
import { Link } from 'react-router-dom';


const Cards: FC<{ card: IPodCastList }> = ({ card }) => {

  const dataAdapter: ICard = cardAdapter(card);

  return (
    <Link to={`podcast/${dataAdapter.id}`} className={styles.card}>
      <div className={styles.card__photo}>
        <img src={dataAdapter.image} alt={dataAdapter.title} />
      </div>
      <div className={styles.card__title}>
        <span>
          {dataAdapter.title}
        </span>

        <span className={styles.card__author}>
          Author: {dataAdapter.author}
        </span>

      </div>
    </Link>

  );
}

export default Cards;