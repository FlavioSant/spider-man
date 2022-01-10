import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import styles from './styles.module.scss';

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={styles['layout-container']}>
      <div className={styles['layout-background-image']} />
      <Header />
      <Sidebar />
      <main className={styles['main-container']}>{children}</main>
    </div>
  );
};
