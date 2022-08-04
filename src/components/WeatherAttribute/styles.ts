import { styled } from 'styles';

export const Container = styled('div', {
  display: 'flex'
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '$5'
});

export const Text = styled('span', {
  fontSize: '1.5rem',
  lineHeight: 0.5
});

export const Label = styled('span', {
  fontSize: '$small',
  color: '#919191'
});
