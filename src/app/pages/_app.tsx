// pages/_app.tsx
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="/src/app/favicon.ico" />
                <meta name="description" content="Descrição do seu site" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
