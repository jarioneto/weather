import { styled } from 'styles';
import { fadeIn } from 'styles/global';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: 300,
  height: 450,
  animation: `${fadeIn} 1s ease`,

  '@tablet': {
    width: 400,
    height: 500
  }
});

export const Title = styled('h3', {
  textAlign: 'center',
  fontSize: '$medium',

  '& > span': {
    display: 'block',
    fontSize: '$large',
    fontWeight: 'bold'
  },

  '@tablet': {
    fontSize: '$large',

    '& > span': {
      fontSize: '$extraLarge'
    }
  }
});

export const Text = styled('h3', {
  textAlign: 'center',
  fontSize: '$extraSmall',

  '@tablet': {
    fontSize: '$small'
  }
});

export const Divider = styled('hr', {
  height: 1,
  width: 110,
  border: 'none',
  backgroundColor: '#d1d1d1'
});

export const Info = styled('div', {
  width: '100%',
  padding: '$3',
  borderRadius: '$medium',
  backgroundColor: '$background',
  border: 'solid 1px #d1d1d1',
  color: '#919191',

  '@tablet': {
    padding: '$4'
  }
});
