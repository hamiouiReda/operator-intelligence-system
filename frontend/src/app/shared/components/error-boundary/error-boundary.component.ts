import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-boundary',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="error-container">
      <div class="error-icon">⚠️</div>
      <h2>Something went wrong</h2>
      <p>An unexpected error occurred. Please try refreshing the page.</p>
      <button class="error-button" (click)="reload()">Reload Page</button>
    </div>
  `,
  styles: [`
    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 60px 20px;
      text-align: center;
      background-color: #131A2A;
      border-radius: 12px;
    }

    .error-icon {
      font-size: 48px;
      margin-bottom: 16px;
    }

    .error-container h2 {
      margin: 0 0 8px 0;
      font-size: 24px;
      color: #F8FAFC;
    }

    .error-container p {
      margin: 0 0 20px 0;
      color: #94A3B8;
      font-size: 14px;
    }

    .error-button {
      padding: 10px 20px;
      background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .error-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
    }
  `],
})
export class ErrorBoundaryComponent {
  reload(): void {
    window.location.reload();
  }
}
