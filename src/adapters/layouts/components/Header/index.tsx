import { FC } from 'react'

import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <div className={`${styles.container}`}>
      Podcaster
    </div>

  );
}

export default Header;