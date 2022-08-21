import { FC } from 'react'
import { IPodcast, TFunction, TFunctionTIme } from './interfaces/podcast.interface';
import styles from './styles/podcast.module.scss';

const Container: FC<{ data: IPodcast, parseTime: TFunctionTIme, parseDate: TFunction }> = ({
  data,
  parseTime,
  parseDate
}) => {

  return (

    <div className={styles.body}>
      <div className={styles.podcast}>
        <div className={styles.podcast__image}>
          <img src={data?.image} alt={data?.title} />
        </div>
        <div className={styles.podcast__data}>
          <div className={`${styles.podcast__title} fw-600 mb-1`}> {data?.title} </div>
          <div className={styles.podcast__author}> by {data?.author} </div>

          <div className={styles.podcast__description}>
            <span className='fw-600'>Description:</span>
            <span>{data?.description}</span>
          </div>
        </div>
      </div>

      <div className={styles.details}>

        <div className={`${styles.details__count} fw-600 font-medium`}>Episodes {data?.episodes.length}</div>
        <div className={styles.episodes}>
          <div className={styles.episodes__header}>
            <div className={styles.episodes__title}>Title</div>
            <div className={styles.episodes__date}>Date</div>
            <div className={styles.episodes__duration}>Duration</div>
          </div>

          <div className={styles.episodes__data}>
            {data?.episodes.map((episode, key) => (
              <div key={key} className={styles.episodes__episode}>
                <div className={styles.episodes__title}> {episode.title} </div>
                <div className={styles.episodes__date}>{parseDate(episode.pubDate!)}</div>
                <div className={styles.episodes__duration}>{parseTime(episode['itunes:duration']!)}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>



  );
}

export default Container;