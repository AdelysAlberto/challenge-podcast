import { FC, Fragment } from 'react'
import { IInput } from './adapters/input.adataper';
import styles from './styles/input.module.scss';


const BaseInput: FC<IInput> = ({
  type = "text",
  placerholder = "",
  onChange,
  value
}) => {
  return (
    <Fragment>
      <input
        className={styles.input}
        type={type}
        placeholder={placerholder}
        onChange={onChange}
        value={value}
      />
    </Fragment>

  );
}

export default BaseInput;