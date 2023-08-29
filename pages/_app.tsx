import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import global from '../styles/globals';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IBS 아웃소싱</title>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='기장대리, 상속증여, 종합소득세, 법인세 등 모든 세무 문제를 해결해 드립니다.'
        />
        <meta name='author' content='ibspartners' />
        <meta name='og:site_name' content='세무법인윤승' />
        <meta name='title' property='og:title' content='세무법인윤승' />
        <meta
          name='og:description'
          property='og:description'
          content='기장대리, 상속증여, 종합소득세, 법인세 등 모든 세무 문제를 해결해 드립니다.'
        />
        <meta name='og:type' content='website' />
        <meta name='og:url' content='' />
        <meta property='og:image' content='' />
      </Head>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
