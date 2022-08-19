import { FC } from 'react';
import styles from './styles/card.module.scss';

interface ICard {
  title?: string
}

const Cards: FC<{ card: ICard }> = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__photo}>
        Foto
      </div>
      <div className={styles.card__title}>
        {card.title}
      </div>
    </div>

  );
}

export default Cards;