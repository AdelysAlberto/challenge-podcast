import { FC, ReactNode } from "react"
import Header from "../components/Header";

import styles from './styles.module.scss';

const LayoutDefault: FC<{ children: ReactNode, isHome?: boolean, isLoading?: boolean }> = ({ children, isHome = false, isLoading }) => {
  return (
    <div className={`container mt-4 ${!isHome && styles.container__small}`}>
      <Header isLoading={isLoading} />
      {children}
    </div>
  )
}

export default LayoutDefault;
