import { FC, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={styles.Button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
