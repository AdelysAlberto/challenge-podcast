import { FC } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { parseDate, parseTime } from '../../../../utilities/validations.utility';
import { IPodcast } from '../../interfaces/podcast.interface';
import styles from '../../styles/podcast.module.scss';

const Episode: FC = () => {

  const { data } = useOutletContext<{ data: IPodcast }>();

  return (
    <>
      <div className={`${styles.details__count} fw-600 font-medium`}>Episodes {data?.episodes.length}</div>
      <div className={styles.episodes}>
        <div className={styles.episodes__header}>
          <div className={styles.episodes__title}>Title</div>
          <div className={styles.episodes__date}>Date</div>
          <div className={styles.episodes__duration}>Duration</div>
        </div>

        <div className={styles.episodes__data}>
          {data?.episodes.map((episode, key) => (
            <Link to={`episode/${episode.guid}`} key={key} className={styles.episodes__episode}>
              <div className={styles.episodes__title}> {episode.title || episode.cdata} </div>
              <div className={styles.episodes__date}>{parseDate(episode.pubDate!)}</div>
              <div className={styles.episodes__duration}>{parseTime(episode['itunes:duration']!)}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Episode;