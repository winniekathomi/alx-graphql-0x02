// sentry.server.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://5433ea14856e959a81ea3f3dd6668872@o4509612063260672.ingest.us.sentry.io/4509612071714816',
  tracesSampleRate: 1.0,
});
