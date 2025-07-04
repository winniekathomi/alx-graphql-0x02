import '../sentry.client.config'; // ✅ Ensure Sentry is initialized
import type { AppProps } from 'next/app';
import ErrorBoundary from '@/components/ErrorBoundary';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
