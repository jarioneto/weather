import { globalCss } from './styles.config';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: '$body',
    fontWeight: '$regular',
    color: '$primary'
  },
  body: {
    minHeight: '100vh'
  }
});
