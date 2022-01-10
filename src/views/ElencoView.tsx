import Tilt from 'react-tilt';
import { DefaultLayout } from '../layouts/DefaultLayout';

import hero1 from '../assets/hero-img-01.png';
import hero2 from '../assets/hero-img-02.png';
import hero3 from '../assets/hero-img-03.png';
import hero4 from '../assets/hero-img-04.png';

import styles from './ElencoView.module.scss';

export const ElencoView: React.FC = () => {
  return (
    <DefaultLayout>
      <div className={styles['elenco-view-container']}>
        <section className={styles['elenco-view-section']}>
          <h1>Principais personagens.</h1>

          <div className={styles['elenco-view-content-container']}>
            <div className={styles['card']}>
              <Tilt options={{ max: 25 }}>
                <figure>
                  <img src={hero1} alt="spider-man miles morales" />
                </figure>
              </Tilt>
              <p>
                Miles Morales é o mais novo Spider-Man da Nova York da Marvel.
                Após a morte precoce do seu pai, Miles foi apresentado a Peter
                Parker, que rapidamente virou seu amigo e mentor. Quando Miles
                foi picado por uma aranha geneticamente modificada da Oscorp,
                ele desenvolveu poderes únicos e, após meses de insistência,
                Peter aceitou treiná-lo.
              </p>
            </div>

            <div className={styles['card']}>
              <Tilt options={{ max: 25 }}>
                <figure>
                  <img src={hero2} alt="spider-man miles morales rio morales" />
                </figure>
              </Tilt>
              <p>
                Rio Morales é a mãe do Miles e uma candidata em ascensão na
                corrida eleitoral da Câmara Municipal de Nova York. Após a morte
                do pai do Miles, Rio e Miles se mudaram de volta para o East
                Harlem, onde ela nasceu e cresceu.
              </p>
            </div>

            <div className={styles['card']}>
              <Tilt options={{ max: 25 }}>
                <figure>
                  <img
                    src={hero3}
                    alt="spider-man miles morales peter parker"
                  />
                </figure>
              </Tilt>
              <p>
                Peter Parker é o Spider-Man original e o mentor de Miles Morales
                como super-herói. Após a morte traumática do pai de Miles, Peter
                consegue um trabalho voluntário para Miles no F.E.S.T.A,
                desencadeando acidentalmente uma série de acontecimentos que
                deixaram Miles com poderes sobre-humanos comparáveis aos de
                Peter.
              </p>
            </div>

            <div className={styles['card']}>
              <Tilt options={{ max: 25 }}>
                <figure>
                  <img src={hero4} alt="spider-man miles morales ganke lee" />
                </figure>
              </Tilt>
              <p>
                Ganke Lee é o melhor amigo e confidente de Miles Morales. Ganke
                sempre morou no Harlem e estuda na Brooklyn Visions Academy,
                onde trabalha para se aprimorar como desenvolvedor de software e
                dar a Miles o apoio que ele tanto precisa. O app Spider-Man
                Amigo da Vizinhança do Ganke pretende revolucionar a maneira
                como os habitantes de Nova York interagem com super-heróis.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};
