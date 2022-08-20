import { FC } from 'react'

import styles from './header.module.scss';

const Header: FC<{ isLoading?: boolean }> = ({ isLoading = false }) => {
  return (
    <div className={`${styles.container}`}>
      <span>Podcaster</span>

      {isLoading && (
        <div className={styles.spin}></div>
      )}

    </div>

  );
}

export default Header;