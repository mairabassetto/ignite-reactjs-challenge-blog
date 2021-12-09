import { GetStaticPaths, GetStaticProps } from 'next';

import Head from 'next/head';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>Home | SpaceTraveling</title>
      </Head>

      <Header />
      <img src="/teste.png" alt="teste" className={styles.banner} />

      <main className={commonStyles.container}>
        <section className={styles.post}>
          <div className={styles.postTitle}>
            <h1>Título</h1>
            <ul>
              <li>
                <FiCalendar />
                09 Dez 2021
              </li>
              <li>
                <FiUser />
                Maíra Bassetto
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Título seção</h2>
            <p>
              Imagine que ao acessar um site que você goste muito pelo
              smartphone você receba um aviso para adicionar o site à sua
              homepage de aplicativos. Com o app instalado agora em seu celular,
              você pode ter a mesma experiência que tinha pelo browser agora sem
              nenhuma informação em tela além da aplicação, ou seja, toda
              interface do navegador como barra de endereço, botões, favoritos,
              etc, são removidos. <strong> Mas é igual um app nativo? </strong>
              Não exatamente. Vamos discutir mais sobre isso durante
              <a href="www.google.com"> exemplo de site</a> o post mas o PWA
              difere em muitos aspectos de apps nativosque passam pelas lojas de
              aplicativos como Google Play e App Store.
            </p>
            <p>
              Ah, vale também lembrar que não é necessário escolher entre PWA ou
              app nativo, inclusive grandes empresas possuem os dois, como
              Twitter, Uber, Facebook, etc.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
