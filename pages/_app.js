import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <title>Quiz de Star Wars</title>
        <link rel="icon" href="https://cdn3.iconfinder.com/data/icons/space-war-5/512/lightsaber-sword-weapon-space-war-512.png" />
        <meta name="title" content="Quiz de Star Wars" />
        <meta name="description" content="Star Wars Quiz, teste seu nivel Jedi!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imersao-react-next-js.matheusmuriel.vercel.app/" />
        <meta property="og:title" content="Quiz de Star Wars" />
        <meta property="og:description" content="Star Wars Quiz, teste seu nivel Jedi!" />
        <meta property="og:image" content="https://imersao-react-next-js.matheusmuriel.vercel.app/" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://imersao-react-next-js.matheusmuriel.vercel.app/" />
        <meta property="twitter:title" content="Quiz de Star Wars" />
        <meta property="twitter:description" content="Star Wars Quiz, teste seu nivel Jedi!" />
        <meta property="twitter:image" content="https://imersao-react-next-js.matheusmuriel.vercel.app/" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
