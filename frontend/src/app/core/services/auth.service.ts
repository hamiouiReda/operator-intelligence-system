import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private tokenKey = 'auth_token';

  constructor(private api: ApiService) {
    this.loadStoredUser();
  }

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Observable<AuthResponse> {
    return this.api
      .post<AuthResponse>('/auth/register', {
        email,
        password,
        firstName,
        lastName,
      })
      .pipe(
        map((response) => {
          this.setToken(response.data.token);
          this.currentUserSubject.next(response.data.user);
          return response.data;
        })
      );
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.api
      .post<AuthResponse>('/auth/login', { email, password })
      .pipe(
        map((response) => {
          this.setToken(response.data.token);
          this.currentUserSubject.next(response.data.user);
          return response.data;
        })
      );
  }

  logout(): void {
    this.removeToken();
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  private loadStoredUser(): void {
    const token = this.getToken();
    if (token) {
      // TODO: Decode token and load user
    }
  }
}
