import { FC } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  onChange: () => void;
  value: string;
}

const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <input
      className={styles.Input}
      onChange={props.onChange}
      type="text"
      value={props.value}
    />
  );
}

export default Input;
