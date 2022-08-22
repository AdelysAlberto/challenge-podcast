import { FC, } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { IPodcast } from '../../interfaces/podcast.interface';
import styles from '../../styles/podcast.module.scss';

const DetailEpisode: FC = () => {
  const { id } = useParams();
  const { data } = useOutletContext<{ data: IPodcast }>();
  const episode = data.episodes.filter(epic => epic.guid === id)[0];

  return (
    <div className={`${styles.details__count} flex-column text-left`}>
      <div className=' fw-600 font-medium mb-3 w-100'>{episode['itunes:author']} - {episode.title}</div>
      <div dangerouslySetInnerHTML={{ __html: episode.description as string }} />

      <div className='w-100 mt-4'>
        <audio controls>
          <source src={episode.enclosure?.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>

  );
}

export default DetailEpisode;