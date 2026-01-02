// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://localhost:5136/api/users'; // or 'http://localhost:5136/api/users'

  constructor(private http: HttpClient) {
    // Test connection on service initialization
    const API_URL = 'http://localhost:5136/api/TestConnection';
    this.http.get(API_URL).subscribe({
      next: (data) => console.log('Connection Success:', data),
      error: (err) => console.error('Connection Failed:', err),
    });
  }

  // Register a new user
  register(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, payload);
  }

  // You might want to add more methods later:
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }

  logout(): void {
    // Clear local storage/tokens
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    // Check if user is logged in
    return !!localStorage.getItem('token');
  }

  getCurrentUser(): any {
    // Get current user from localStorage
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
