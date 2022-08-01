import { styled } from 'styles';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: 300,
  height: 450,

  '@tablet': {
    width: 400,
    height: 500
  }
});

export const Title = styled('h3', {
  textAlign: 'center',
  fontSize: '$medium',

  '& > span': {
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
  backgroundColor: '#f0f0f0',
  color: '#919191',

  '@tablet': {
    padding: '$4'
  }
});
