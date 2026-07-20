import { Injectable } from '@angular/core';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notifications: Notification[] = [];

  show(
    message: string,
    type: 'success' | 'error' | 'warning' | 'info' = 'info',
    duration: number = 3000
  ): void {
    const id = Date.now().toString();
    const notification: Notification = { id, message, type, duration };
    this.notifications.push(notification);

    if (duration > 0) {
      setTimeout(() => this.remove(id), duration);
    }
  }

  remove(id: string): void {
    this.notifications = this.notifications.filter((n) => n.id !== id);
  }

  getNotifications(): Notification[] {
    return this.notifications;
  }
}
