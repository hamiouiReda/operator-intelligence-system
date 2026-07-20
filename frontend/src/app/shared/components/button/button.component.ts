import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="getButtonClasses()"
      [disabled]="disabled"
      (click)="onClick()"
    >
      <span *ngIf="icon" class="button-icon">{{ icon }}</span>
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      font-family: inherit;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: 500;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Size variants */
    button.sm {
      padding: 6px 12px;
      font-size: 12px;
    }

    button.md {
      padding: 10px 16px;
      font-size: 14px;
    }

    button.lg {
      padding: 12px 20px;
      font-size: 16px;
    }

    /* Color variants */
    button.primary {
      background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
      color: white;
    }

    button.primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
    }

    button.secondary {
      background-color: rgba(148, 163, 184, 0.1);
      color: #94A3B8;
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    button.secondary:hover:not(:disabled) {
      background-color: rgba(148, 163, 184, 0.15);
      border-color: rgba(148, 163, 184, 0.3);
    }

    button.success {
      background-color: #22C55E;
      color: white;
    }

    button.success:hover:not(:disabled) {
      opacity: 0.9;
    }

    button.warning {
      background-color: #F59E0B;
      color: white;
    }

    button.warning:hover:not(:disabled) {
      opacity: 0.9;
    }

    button.danger {
      background-color: #EF4444;
      color: white;
    }

    button.danger:hover:not(:disabled) {
      opacity: 0.9;
    }

    button.ghost {
      background-color: transparent;
      color: #3B82F6;
      border: 1px solid transparent;
    }

    button.ghost:hover:not(:disabled) {
      background-color: rgba(59, 130, 246, 0.1);
      border-color: #3B82F6;
    }

    .button-icon {
      font-size: 16px;
    }
  `],
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() icon: string | null = null;

  onClick(): void {
    console.log('Button clicked');
  }

  getButtonClasses(): string {
    return `${this.variant} ${this.size}`;
  }
}
