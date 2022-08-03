import { styled } from 'styles';

export const Container = styled('div', {
  display: 'grid',
  maxWidth: '100%',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  columnGap: '$5',
  rowGap: '$10',

  '@tablet': {
    marginTop: 60,
    maxWidth: 1000,
    height: 500
  }
});

export const Section = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&:first-child': {
    order: 2,
    margin: '$10 0'
  },

  '@tablet': {
    minWidth: 400,

    '&:first-child': {
      order: 0,
      margin: 'unset',
      borderRight: 'solid 1px #e8e8e8'
    }
  }
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 530
});

export const Title = styled('h3', {
  display: 'none',
  fontSize: '$medium',
  marginBottom: '5rem',

  '& > span': {
    display: 'block',
    fontSize: '$large',
    fontWeight: 'bold'
  },

  '@tablet': {
    display: 'block',
    fontSize: '$large',

    '& > span': {
      fontSize: '$extraLarge'
    }
  }
});

export const Box = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    },
    align: {
      start: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      }
    }
  },
  defaultVariants: {
    align: 'start',
    direction: 'row'
  }
});

export const Typography = styled('h4', {
  fontSize: '$medium',
  textTransform: 'capitalize',

  variants: {
    size: {
      medium: {
        fontSize: '$medium'
      },
      large: {
        fontSize: '$large'
      },
      extraLarge: {
        fontSize: '$extraLarge'
      },
      extraLarge2: {
        fontSize: '8rem',
        fontWeight: '$medium',
        lineHeight: '$none'
      }
    }
  }
});

export const ListAttributes = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 180
});
