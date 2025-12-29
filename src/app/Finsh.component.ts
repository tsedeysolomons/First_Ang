import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="success-container">
      <h2>✅ Registration Successful</h2>
      <p>Your account has been created successfully.</p>

      <button class="btn" routerLink="/">Go to Home</button>
    </div>
  `,
  styles: [
    `
      .success-container {
        width: 350px;
        margin: 80px auto;
        padding: 25px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-family: Arial;
      }

      h2 {
        color: #28a745;
        margin-bottom: 10px;
      }

      p {
        color: #555;
        margin-bottom: 20px;
      }

      .btn {
        padding: 10px 16px;
        background-color: #1976d2;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
    `,
  ],
})
export class SuccessComponent {}
