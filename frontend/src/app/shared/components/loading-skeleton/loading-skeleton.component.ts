import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LoadingSkeletonConfig {
  lines?: number;
  variant?: 'text' | 'card' | 'avatar';
}

@Component({
  selector: 'app-loading-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'skeleton skeleton-' + variant">
      <div *ngFor="let i of getLines()" class="skeleton-line"></div>
    </div>
  `,
  styles: [`
    .skeleton {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .skeleton-text {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .skeleton-line {
      height: 12px;
      background-color: rgba(148, 163, 184, 0.1);
      border-radius: 6px;
    }

    .skeleton-line:last-child {
      width: 80%;
    }

    .skeleton-card {
      background-color: #131A2A;
      border-radius: 16px;
      padding: 20px;
      gap: 12px;
    }

    .skeleton-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(148, 163, 184, 0.1);
    }

    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `],
})
export class LoadingSkeletonComponent {
  @Input() lines = 3;
  @Input() variant: 'text' | 'card' | 'avatar' = 'text';

  getLines(): number[] {
    return Array.from({ length: this.lines }, (_, i) => i);
  }
}
