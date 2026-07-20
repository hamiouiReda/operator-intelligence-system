import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ApiResponse<T> {
  data: T;
  error?: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api/v1';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: HttpParams): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, {
      params,
    });
  }

  post<T>(
    endpoint: string,
    body: any,
    params?: HttpParams
  ): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, body, {
      params,
    });
  }

  put<T>(
    endpoint: string,
    body: any,
    params?: HttpParams
  ): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, body, {
      params,
    });
  }

  delete<T>(endpoint: string, params?: HttpParams): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(`${this.apiUrl}${endpoint}`, {
      params,
    });
  }
}
