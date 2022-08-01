import { styled } from 'styles';

export const Layout = styled('div', {
  display: 'grid',
  gridTemplateAreas: `
    "header"
    "content"
  `,
  rowGap: '$8'
});

export const Header = styled('section', {
  position: 'relative',
  display: 'grid',
  gridArea: 'header',
  height: 90,
  padding: '$4 5%',

  '&::after': {
    content: `''`,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    maxHeight: '25vh',
    background: 'url(/assets/images/bg-header.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    zIndex: -1
  }
});

export const Content = styled('section', {
  position: 'relative',
  display: 'grid',
  gridArea: 'content',
  height: 'calc(100vh - 122px)',
  padding: '$4',
  justifyContent: 'center',

  '&::after': {
    content: `''`,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 500,
    maxHeight: '75vh',
    background: 'url(/assets/images/bg-footer.jpg) no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    zIndex: -1
  }
});

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center'
});

export const Title = styled('h2', {
  fontSize: '$large',
  marginLeft: '$3',
  marginTop: '$2'
});
