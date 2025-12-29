import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
/*Add server-only providers (DI tokens, interceptors, special server-only services)
 to serverConfig.providers.
Modify or extend serverRoutes in app.routes.server.ts 
if the server needs different route handling.*/ 
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
