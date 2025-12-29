import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-first',
  imports: [RouterLink],
  standalone: true,
  template: `<h2>Welcome to First Angular App Component</h2>
    <button class="btn" routerLink="/register">Go to Registe</button>`,
  styles: [
    `
      h2 {
        color: blue;
        font-family: Arial;
      }
      .btn {
        padding: 10px 15px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    `,
  ],
})
export class FirstComponent {}
