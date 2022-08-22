import { FC } from 'react'
import { IPodcast } from './interfaces/podcast.interface';
import styles from './styles/podcast.module.scss';
import { Outlet } from 'react-router-dom';
const Container: FC<{ data: IPodcast }> = ({
  data,
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
            <span dangerouslySetInnerHTML={{ __html: data?.description as string }} />
          </div>
        </div>
      </div>

      <div className={styles.details}>
        <Outlet context={{ data }} />

      </div>
    </div>

  );
}

export default Container;