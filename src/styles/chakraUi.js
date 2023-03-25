import { extendTheme } from '@chakra-ui/react';
import './Home.module.css';
const theme = extendTheme({
  fonts: {
    heading: `'cursive', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
