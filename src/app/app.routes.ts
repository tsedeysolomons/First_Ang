// this file can be used to define routes specific to server rendering
import { Routes } from '@angular/router';
 import { UserRegistrationComponent } from './New_form.component';
 import { FirstComponent } from './first.component';
 import {SuccessComponent} from './Finsh.component';
 
//export const routes: Routes = [];  // It's empty — [] means no routes are defined, so the router has nothing to match; your app currently doesn't use route-based navigation.
/* Where it's used: app.config.ts calls provideRouter(routes), 
so whatever you put in routes will become the app’s client routing table.
Tip: To add a route, define entries like:
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent }*/

 export const routes: Routes = [
   { path: '', component: FirstComponent }, // home route
   { path: 'register', component: UserRegistrationComponent },
   { path: 'successful', component: SuccessComponent }
 ];