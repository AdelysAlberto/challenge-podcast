import { FC, ReactNode } from "react"
import Header from "../components/Header";

import styles from './default.module.scss';

const LayoutDefault: FC<{ children: ReactNode, isHome?: boolean }> = ({ children, isHome = false }) => {
  return (
    <div className={`container mt-4 ${!isHome && styles.container__small}`}>
      <Header />
      {children}
    </div>
  )
}

export default LayoutDefault;
