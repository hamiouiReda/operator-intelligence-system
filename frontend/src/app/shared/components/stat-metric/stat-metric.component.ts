import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatMetric {
  label: string;
  value: string | number;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

@Component({
  selector: 'app-stat-metric',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat-metric">
      <div class="stat-icon" *ngIf="icon">{{ icon }}</div>
      <div class="stat-content">
        <p class="stat-label">{{ label }}</p>
        <h3 class="stat-value">{{ value }}</h3>
        <span
          *ngIf="trend"
          class="stat-trend"
          [class]="'trend-' + trend"
        >
          <span class="trend-icon">
            {{ trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→' }}
          </span>
          {{ trendValue }}
        </span>
      </div>
    </div>
  `,
  styles: [`
    .stat-metric {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
      background-color: #131A2A;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 12px;
    }

    .stat-icon {
      font-size: 24px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(59, 130, 246, 0.1);
      border-radius: 8px;
    }

    .stat-content {
      flex: 1;
    }

    .stat-label {
      margin: 0 0 4px 0;
      font-size: 12px;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .stat-value {
      margin: 0 0 4px 0;
      font-size: 24px;
      font-weight: 700;
      color: #F8FAFC;
    }

    .stat-trend {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      font-weight: 500;
    }

    .trend-up {
      color: #22C55E;
    }

    .trend-down {
      color: #EF4444;
    }

    .trend-neutral {
      color: #94A3B8;
    }

    .trend-icon {
      font-size: 10px;
    }
  `],
})
export class StatMetricComponent {
  @Input() label: string = '';
  @Input() value: string | number = 0;
  @Input() icon: string | null = null;
  @Input() trend: 'up' | 'down' | 'neutral' | null = null;
  @Input() trendValue: string = '';
}
