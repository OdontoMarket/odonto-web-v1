import { FC, ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode
}

const Container: FC<ContainerProps> = (props: ContainerProps) => {
  return (
    <div className={styles.Container}>
      {props.children}
    </div>
  );
}

export default Container;
