import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  type: 'event' | 'milestone' | 'alert';
  icon?: string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline">
      <div *ngFor="let item of items; let last = last" class="timeline-item">
        <div class="timeline-dot" [class]="'dot-' + item.type">
          {{ item.icon }}
        </div>
        <div class="timeline-content" [class.last]="last">
          <div class="timeline-header">
            <h4 class="timeline-title">{{ item.title }}</h4>
            <span class="timeline-time">{{ formatTime(item.timestamp) }}</span>
          </div>
          <p class="timeline-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .timeline {
      position: relative;
      padding: 20px 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 20px;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(
        to bottom,
        rgba(59, 130, 246, 0.3),
        rgba(59, 130, 246, 0)
      );
    }

    .timeline-item {
      display: flex;
      gap: 20px;
      margin-bottom: 24px;
      position: relative;
    }

    .timeline-dot {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      z-index: 1;
      font-size: 18px;
    }

    .dot-event {
      background-color: rgba(59, 130, 246, 0.2);
      border: 2px solid #3B82F6;
    }

    .dot-milestone {
      background-color: rgba(34, 197, 94, 0.2);
      border: 2px solid #22C55E;
    }

    .dot-alert {
      background-color: rgba(239, 68, 68, 0.2);
      border: 2px solid #EF4444;
    }

    .timeline-content {
      flex: 1;
      padding: 12px 16px;
      background-color: #0B0F19;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 12px;
      border-left: 3px solid #3B82F6;
    }

    .timeline-content.last {
      margin-bottom: 0;
    }

    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 8px;
    }

    .timeline-title {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .timeline-time {
      font-size: 12px;
      color: #94A3B8;
      white-space: nowrap;
    }

    .timeline-description {
      margin: 0;
      font-size: 13px;
      color: #94A3B8;
      line-height: 1.5;
    }
  `],
})
export class TimelineComponent {
  @Input() items: TimelineItem[] = [];
  @Output() itemClick = new EventEmitter<TimelineItem>();

  formatTime(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  }
}
