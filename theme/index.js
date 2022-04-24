import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
// Component style overrides
// ... ./components/

const theme = extendTheme({
  // config,
  styles,
  // colors,
  // breakpoints,
  // components,
});
// console.log('theme :', theme);

export default theme;
