import { FiPlay } from 'react-icons/fi';
import milesMoralesLogo from '../assets/miles-morales-logo.svg';

import { DefaultLayout } from '../layouts/DefaultLayout';

import styles from './HomeView.module.scss';

export const HomeView: React.FC = () => {
  return (
    <DefaultLayout>
      <div className={styles['home-view-container']}>
        <img src={milesMoralesLogo} alt="Logo Spider Man Miles Morales" />

        <a
          className={styles['trailer-link']}
          href="https://www.youtube.com/watch?v=qjRzm9A7DU4&ab_channel=PlayStationBrasil"
          target="_blank"
          rel="noreferrer"
          title="Clique para assistir ao trailer."
        >
          ASSISTA AO TRAILER <FiPlay size={24} />
        </a>
      </div>
    </DefaultLayout>
  );
};
