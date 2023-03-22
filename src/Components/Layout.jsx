import React from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import { Footer } from './Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>PropFinder</title>
      </Head>
      <Box w="full" m="auto">
        <header>
          <Navbar />
        </header>
        <main w="1200px" className="mx-auto">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
