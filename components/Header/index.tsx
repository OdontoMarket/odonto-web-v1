import { FC } from 'react';
import { Button, Input } from '..';
import styles from './Header.module.scss';

const categories = [
  {
    label: 'Biosegurança',
    value: 'Biosegurança'
  },
  {
    label: 'Descartáveis',
    value: 'Descartáveis'
  },
  {
    label: 'Dentística e Estética',
    value: 'Dentística e Estética'
  },
  {
    label: 'Ortodontia',
    value: 'Ortodontia'
  },
  {
    label: 'Endodontia',
    value: 'Endodontia'
  },
  {
    label: 'Prótese',
    value: 'Prótese'
  },
  {
    label: 'Moldagem',
    value: 'Moldagem'
  },
  {
    label: 'Radiologia',
    value: 'Radiologia'
  },
];

const Header: FC<{}> = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.search}>
        <Button onClick={() => {}}>Back</Button>
        <Input onChange={() => {}} value='' />
        <Button onClick={() => {}}>Filtros</Button>
      </div>
      <div className={styles.filters}>
        <Button onClick={() => {}}>Todas as categorias</Button>
        {categories.map(category => (
          <Button onClick={() => {}} key={category.value}>{category.label}</Button>
        ))}
      </div>
    </div>
  );
}

export default Header;
