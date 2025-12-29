import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(), //browser global error handlers
    provideRouter(routes), // the client router with app routes
    provideClientHydration(withEventReplay()), //client hydration to replay events after SSR
  ],
};
