import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

import styles from './Sidebar.module.scss';

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles['sidebar-container']}>
      <div className={styles['sidebar-icons']}>
        <a
          href="https://www.instagram.com/spiderman/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <FiInstagram size={32} />
        </a>
        <a
          href="https://twitter.com/spiderman"
          target="_blank"
          rel="noreferrer"
          title="Twitter"
        >
          <FiTwitter size={32} />
        </a>
        <a
          href="https://www.facebook.com/spiderman/"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <FiFacebook size={32} />
        </a>
      </div>
    </aside>
  );
};
