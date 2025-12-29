// This is your root Angular component (standalone) that bootstraps the UI.
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { FirstComponent } from './first.component';
//import { UserRegistrationComponent } from './New_form.component';

@Component({
  selector: 'app-root', //the root selector for index.html to load
  standalone: true,
  imports: [RouterOutlet], //includes routing outlet and a child component
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('First_Ang');
}
