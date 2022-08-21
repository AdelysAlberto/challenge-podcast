import { FC } from 'react'
import { Link } from 'react-router-dom';

import styles from './header.module.scss';

const Header: FC<{ isLoading?: boolean }> = ({ isLoading = false }) => {
  return (
    <div className={`${styles.container}`}>
      <Link to={'/'}>Podcaster</Link>

      {isLoading && (
        <div className={styles.spin}></div>
      )}

    </div>

  );
}

export default Header;