import { globalCss, keyframes } from './styles.config';

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

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-20px)'
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)'
  }
});
