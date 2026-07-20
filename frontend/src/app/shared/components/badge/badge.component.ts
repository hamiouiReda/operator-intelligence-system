import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger' | 'secondary';
type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="getBadgeClasses()" [title]="tooltip">
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    span {
      display: inline-flex;
      align-items: center;
      font-weight: 600;
      border-radius: 8px;
      white-space: nowrap;
    }

    /* Size variants */
    span.sm {
      padding: 2px 6px;
      font-size: 10px;
    }

    span.md {
      padding: 4px 8px;
      font-size: 12px;
    }

    span.lg {
      padding: 6px 12px;
      font-size: 14px;
    }

    /* Color variants */
    span.primary {
      background-color: rgba(59, 130, 246, 0.2);
      color: #3B82F6;
    }

    span.success {
      background-color: rgba(34, 197, 94, 0.2);
      color: #22C55E;
    }

    span.warning {
      background-color: rgba(245, 158, 11, 0.2);
      color: #F59E0B;
    }

    span.danger {
      background-color: rgba(239, 68, 68, 0.2);
      color: #EF4444;
    }

    span.secondary {
      background-color: rgba(148, 163, 184, 0.2);
      color: #94A3B8;
    }
  `],
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
  @Input() size: BadgeSize = 'md';
  @Input() tooltip: string | null = null;

  getBadgeClasses(): string {
    return `${this.variant} ${this.size}`;
  }
}
