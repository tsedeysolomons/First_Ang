/* Bootstrapping the Application: This file is responsible for initializing and 
launching your Angular application.
Key Functions:
It imports necessary modules and components, specifically bootstrapApplication 
from @angular/platform-browser and your root component (App).
It calls bootstrapApplication(App, appConfig) to start the 
application with the specified configuration (appConfig).
This file is essential for starting your Angular application and linking 
it to the HTML structure defined in index.html. no chage recommend for now */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
