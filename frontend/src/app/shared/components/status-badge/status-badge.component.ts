import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatusBadgeConfig {
  status: 'idle' | 'active' | 'success' | 'warning' | 'error' | 'offline';
  label: string;
}

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="status-badge" [class]="'status-' + status">
      <div class="status-dot"></div>
      <span class="status-label">{{ label }}</span>
    </div>
  `,
  styles: [`
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 500;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .status-idle {
      background-color: rgba(148, 163, 184, 0.1);
      color: #94A3B8;
    }

    .status-idle .status-dot {
      background-color: #94A3B8;
      animation: none;
    }

    .status-active {
      background-color: rgba(59, 130, 246, 0.1);
      color: #3B82F6;
    }

    .status-active .status-dot {
      background-color: #3B82F6;
    }

    .status-success {
      background-color: rgba(34, 197, 94, 0.1);
      color: #22C55E;
    }

    .status-success .status-dot {
      background-color: #22C55E;
      animation: none;
    }

    .status-warning {
      background-color: rgba(245, 158, 11, 0.1);
      color: #F59E0B;
    }

    .status-warning .status-dot {
      background-color: #F59E0B;
    }

    .status-error {
      background-color: rgba(239, 68, 68, 0.1);
      color: #EF4444;
    }

    .status-error .status-dot {
      background-color: #EF4444;
    }

    .status-offline {
      background-color: rgba(148, 163, 184, 0.1);
      color: #94A3B8;
    }

    .status-offline .status-dot {
      background-color: #94A3B8;
      animation: none;
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
export class StatusBadgeComponent {
  @Input() status: 'idle' | 'active' | 'success' | 'warning' | 'error' | 'offline' = 'idle';
  @Input() label: string = '';
}
