import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateUtilService {
  formatDate(date: Date | string, format: string = 'MMM dd, yyyy'): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', this.getFormatOptions(format)).format(
      d
    );
  }

  formatTime(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(d);
  }

  getRelativeTime(date: Date | string): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return this.formatDate(d);
  }

  private getFormatOptions(format: string): any {
    const options: any = {};
    if (format.includes('MMM')) options.month = 'short';
    if (format.includes('dd')) options.day = '2-digit';
    if (format.includes('yyyy')) options.year = 'numeric';
    return options;
  }
}
