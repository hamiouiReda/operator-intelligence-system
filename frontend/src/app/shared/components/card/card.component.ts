import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardConfig {
  title: string;
  subtitle?: string;
  icon?: string;
  badge?: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [class.clickable]="isClickable">
      <div class="card-header" *ngIf="title">
        <div class="header-content">
          <span class="card-icon" *ngIf="icon">{{ icon }}</span>
          <div class="header-text">
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-subtitle" *ngIf="subtitle">{{ subtitle }}</p>
          </div>
        </div>
        <span class="card-badge" *ngIf="badge">{{ badge }}</span>
      </div>
      <div class="card-content">
        <ng-content></ng-content>
      </div>
      <div class="card-footer" *ngIf="footerContent)">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background-color: #131A2A;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 16px;
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card.clickable {
      cursor: pointer;
    }

    .card:hover {
      border-color: rgba(148, 163, 184, 0.2);
      transform: translateY(-2px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 20px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 16px;
      flex: 1;
    }

    .card-icon {
      font-size: 24px;
    }

    .header-text {
      flex: 1;
    }

    .card-title {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .card-subtitle {
      margin: 4px 0 0 0;
      font-size: 12px;
      color: #94A3B8;
    }

    .card-badge {
      display: inline-block;
      padding: 4px 8px;
      background-color: rgba(59, 130, 246, 0.2);
      color: #3B82F6;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .card-content {
      padding: 20px;
    }

    .card-footer {
      padding: 12px 20px;
      border-top: 1px solid rgba(148, 163, 184, 0.1);
      background-color: rgba(148, 163, 184, 0.05);
    }
  `],
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string | null = null;
  @Input() icon: string | null = null;
  @Input() badge: string | null = null;
  @Input() isClickable = false;
  @Output() cardClick = new EventEmitter<void>();

  footerContent = true;

  onClick(): void {
    if (this.isClickable) {
      this.cardClick.emit();
    }
  }
}
