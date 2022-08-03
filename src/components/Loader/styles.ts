import { styled, keyframes } from 'styles';

const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

export const Spin = styled('div', {
  display: 'inline-block',
  position: 'relative',
  width: 40,
  height: 40,

  '& > div': {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: 35,
    height: 35,
    border: '3px solid $secondary',
    borderRadius: '50%',
    animation: `${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    borderColor: '$secondary transparent transparent transparent'
  },

  '& > div:nth-child(1)': {
    animationDelay: '-0.45s'
  },

  '& > div:nth-child(2)': {
    animationDelay: '-0.3s'
  },

  '& > div:nth-child(3)': {
    animationDelay: '-0.15s'
  },

  '& > div:nth-child(4)': {
    animation: 'unset',
    borderColor: '$secondary',
    opacity: 0.2
  }
});

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
});
