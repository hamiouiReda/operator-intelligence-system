import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface LoadingState {
  isLoading: boolean;
  loadingText?: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<LoadingState>({
    isLoading: false,
  });
  public loading$ = this.loadingSubject.asObservable();

  start(text?: string): void {
    this.loadingSubject.next({ isLoading: true, loadingText: text });
  }

  stop(): void {
    this.loadingSubject.next({ isLoading: false });
  }
}
