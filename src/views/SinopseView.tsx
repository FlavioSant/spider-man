import { DefaultLayout } from '../layouts/DefaultLayout';

import sinopseImg1 from '../assets/sinopse-img-01.png';
import sinopseImg2 from '../assets/sinopse-img-02.png';
import sinopseImg3 from '../assets/sinopse-img-03.png';

import styles from './SinopseView.module.scss';

export const SinopseView: React.FC = () => {
  return (
    <DefaultLayout>
      <div className={styles['sinopse-view-container']}>
        <section className={styles['sinopse-view-section']}>
          <h1>Veja a Sinopse e Visão Geral do Jogo.</h1>

          <div className={styles['sinopse-view-content-container']}>
            <article className={styles['text-block']}>
              <h2>Visão Geral do Jogo</h2>

              <p>
                Acompanhe a trajetória de Miles Morales enquanto ele aprende a
                dominar poderes incríveis e explosivos para se tornar o novo
                Spider-Man.
              </p>
            </article>

            <article className={styles['text-block']}>
              <h2>Sinopse</h2>
              <p>
                Na mais nova aventura do universo de Marvel's Spider-Man, o
                adolescente Miles Morales está se adaptando a um novo lar
                enquanto segue os passos de seu mentor, Peter Parker, como novo
                Spider-Man.
                <br />
                <br />
                Mas quando uma violenta disputa de forças ameaça destruir sua
                vizinhança, o aspirante a herói percebe que com grandes poderes
                também vêm grandes responsabilidades. Para salvar a Nova York da
                Marvel, Miles deve reconhecer e assumir o título de Spider-Man.
              </p>
            </article>
          </div>
        </section>

        <section className={styles['sinopse-view-section']}>
          <h1>Recursos do Game</h1>

          <div className={styles['sinopse-view-content-container']}>
            <article className={styles['card']}>
              <h2>A trajetória de Miles Morales</h2>
              <figure>
                <img
                  src={sinopseImg1}
                  alt="Marvel's Spider-Man: Miles Morales"
                />
              </figure>
              <p>
                Miles Morales descobre poderes incríveis e explosivos que o
                diferenciam de seu mentor, Peter Parker. Domine seus ataques
                Venom bioelétricos, poderes de camuflagem, truques espetaculares
                com teia, além de dispositivos e habilidades.
              </p>
            </article>

            <article className={styles['card']}>
              <h2>Uma guerra pelo poder</h2>
              <figure>
                <img
                  src={sinopseImg2}
                  alt="Marvel's Spider-Man: Miles Morales"
                />
              </figure>
              <p>
                Uma guerra pelo controle da Nova York da Marvel estourou entre
                uma empresa de energia desonesta e um exército criminoso de alta
                tecnologia. Com o seu novo lar ameaçado pelo conflito, Miles
                deve descobrir o preço de se tornar um herói e decidir o que
                sacrificar pelo bem maior.
              </p>
            </article>

            <article className={styles['card']}>
              <h2>Um lar novo e vibrante</h2>
              <figure>
                <img
                  src={sinopseImg3}
                  alt="Marvel's Spider-Man: Miles Morales"
                />
              </figure>
              <p>
                Atravesse as ruas cobertas de neve do animado e movimentado
                bairro de Miles enquanto ele se adapta à nova vizinhança. Quando
                os limites entre a sua vida pessoal e o combate ao crime começam
                a desaparecer, Miles descobre em quem pode confiar e como é
                realmente se sentir em casa.
              </p>
            </article>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};
