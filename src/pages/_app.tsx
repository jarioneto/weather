import type { AppProps } from 'next/app';
import { weatherTheme } from 'styles';
import { globalStyles } from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <div className={weatherTheme}>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
