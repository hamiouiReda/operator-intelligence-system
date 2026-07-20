import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  width?: string;
  template?: any;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th *ngFor="let col of columns" [style.width]="col.width" class="table-header">
              <div class="header-content">
                {{ col.label }}
                <span class="sort-icon" *ngIf="col.sortable">↕</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of data; let last = last" [class.last-row]="last">
            <td *ngFor="let col of columns" class="table-cell">
              {{ row[col.key as keyof typeof row] }}
            </td>
          </tr>
          <tr *ngIf="data.length === 0" class="empty-row">
            <td [attr.colspan]="columns.length" class="empty-message">
              No data available
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .table-wrapper {
      overflow-x: auto;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 12px;
    }

    .table {
      width: 100%;
      border-collapse: collapse;
      background-color: #131A2A;
    }

    .table-header {
      padding: 12px 16px;
      text-align: left;
      background-color: rgba(148, 163, 184, 0.05);
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
      font-size: 12px;
      font-weight: 600;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .sort-icon {
      font-size: 10px;
      opacity: 0.5;
      cursor: pointer;
    }

    .table-cell {
      padding: 12px 16px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
      color: #F8FAFC;
      font-size: 14px;
    }

    .last-row .table-cell {
      border-bottom: none;
    }

    tbody tr:hover {
      background-color: rgba(59, 130, 246, 0.05);
    }

    .empty-row {
      background-color: transparent;
    }

    .empty-message {
      padding: 32px 16px;
      text-align: center;
      color: #94A3B8;
      font-size: 14px;
    }
  `],
})
export class TableComponent<T extends Record<string, any>> {
  @Input() data: T[] = [];
  @Input() columns: TableColumn<T>[] = [];
  @Output() rowClick = new EventEmitter<T>();

  onRowClick(row: T): void {
    this.rowClick.emit(row);
  }
}
