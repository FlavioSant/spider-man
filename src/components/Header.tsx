import { useState } from 'react';
import { Link } from 'react-router-dom';
import marvelLogo from '../assets/marvel-logo.svg';
import spiderLogo from '../assets/spider-logo.svg';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles['header-container']}>
      <figure>
        <img src={marvelLogo} alt="Logo Marvel" />
      </figure>

      <figure>
        <img src={spiderLogo} alt="Logo Spider Man" />
      </figure>

      <nav
        className={`${styles['navbar-container']} ${
          isMenuOpen ? styles['is-menu-open'] : ''
        }`}
      >
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/sinopse">SINOPSE</Link>
          </li>
          <li>
            <Link to="/elenco">ELENCO</Link>
          </li>
        </ul>
      </nav>

      <button
        aria-label="Clique para abrir o menu."
        type="button"
        className={styles['toggler-button']}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};
