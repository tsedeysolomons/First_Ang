// server only routes 
/*Your server bootstrap merges appConfig with serverConfig
 (which adds provideServerRendering(withRoutes(serverRoutes)))
  to enable SSR plus the server routes.Client hydration is 
already enabled so the browser can replay user events after
 the server-rendered HTML is delivered.*/
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
