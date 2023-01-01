import Head from 'next/head';
import { Box } from '@chakra-ui/react';

export const Layout = ({ children }) => {
  return (
    <>
      <Box maxWidth='1280px' m='auto'>
        <header>Navbar</header>
        <main>{children}</main>
        <footer>Footer</footer>
      </Box>
    </>
  );
};
