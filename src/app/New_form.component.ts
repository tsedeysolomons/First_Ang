import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-registration',
  imports: [RouterLink],
  template: `
    <div class="container">
      <h2>User Registration</h2>

      <form>
        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <input type="tel" placeholder="Phone Number" />

        <select>
          <option value="">Select Department</option>
          <option>Computer Science</option>
          <option>Information Technology</option>
          <option>Software Engineering</option>
          <option>Electrical Engineering</option>
        </select>

        <button class="newbun" routerLink="/successful">Register</button>
      </form>
    </div>
  `,
  styles: [
    `
      .container {
        width: 320px;
        margin: 50px auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-family: Arial;
      }

      h2 {
        text-align: center;
        color: #2c3e50;
      }

      form {
        display: flex;
        flex-direction: column;
      }

      input,
      select {
        margin-bottom: 12px;
        padding: 8px;
        font-size: 14px;
      }

      button {
        padding: 10px;
        background-color: #1976d2;
        color: white;
        border: none;
        cursor: pointer;
      }

      button:hover {
        background-color: #125aa3;
      }
    `,
  ],
})
export class UserRegistrationComponent {}
