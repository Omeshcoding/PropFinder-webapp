// import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';

import Layout from '../Components/Layout';
import '../styles/globals.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
