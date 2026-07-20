import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="breadcrumb">
      <ol class="breadcrumb-list">
        <li *ngFor="let item of items; let last = last" class="breadcrumb-item">
          <a *ngIf="!last && item.path" [href]="item.path" class="breadcrumb-link">
            {{ item.label }}
          </a>
          <span *ngIf="last" class="breadcrumb-current">{{ item.label }}</span>
          <span *ngIf="!last" class="breadcrumb-separator">/</span>
        </li>
      </ol>
    </nav>
  `,
  styles: [`
    .breadcrumb {
      margin-bottom: 16px;
    }

    .breadcrumb-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 8px;
    }

    .breadcrumb-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .breadcrumb-link {
      color: #3B82F6;
      text-decoration: none;
      font-size: 13px;
      transition: color 0.2s ease;
    }

    .breadcrumb-link:hover {
      color: #1E40AF;
    }

    .breadcrumb-current {
      color: #F8FAFC;
      font-size: 13px;
      font-weight: 500;
    }

    .breadcrumb-separator {
      color: #94A3B8;
      font-size: 12px;
    }
  `],
})
export class BreadcrumbComponent {
  @Input() items: BreadcrumbItem[] = [];
}
