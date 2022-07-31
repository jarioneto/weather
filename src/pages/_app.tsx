import type { AppProps } from 'next/app';
import { weatherTheme } from 'styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={weatherTheme}>
      <Component {...pageProps} />
    </div>
  );
}

export default App
