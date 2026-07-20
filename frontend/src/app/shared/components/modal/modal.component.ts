import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" *ngIf="isOpen" (click)="closeModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2 class="modal-title">{{ title }}</h2>
          <button class="close-button" (click)="closeModal()">×</button>
        </div>
        <div class="modal-body">
          <ng-content></ng-content>
        </div>
        <div class="modal-footer" *ngIf="showFooter">
          <button class="modal-button cancel" (click)="closeModal()">
            {{ cancelLabel }}
          </button>
          <button class="modal-button confirm" (click)="confirm()">
            {{ confirmLabel }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      background-color: #131A2A;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 16px;
      max-width: 500px;
      width: 90%;
      max-height: 90vh;
      overflow-y: auto;
      animation: slideIn 0.3s ease;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .modal-title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .close-button {
      background: none;
      border: none;
      color: #94A3B8;
      font-size: 28px;
      cursor: pointer;
      padding: 0;
      transition: color 0.2s ease;
    }

    .close-button:hover {
      color: #F8FAFC;
    }

    .modal-body {
      padding: 24px;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      padding: 16px 24px;
      border-top: 1px solid rgba(148, 163, 184, 0.1);
      background-color: rgba(148, 163, 184, 0.05);
    }

    .modal-button {
      padding: 10px 16px;
      border: none;
      border-radius: 8px;
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .modal-button.cancel {
      background-color: rgba(148, 163, 184, 0.1);
      color: #94A3B8;
      border: 1px solid rgba(148, 163, 184, 0.2);
    }

    .modal-button.cancel:hover {
      background-color: rgba(148, 163, 184, 0.15);
    }

    .modal-button.confirm {
      background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
      color: white;
    }

    .modal-button.confirm:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideIn {
      from {
        transform: translateY(-50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = 'Modal';
  @Input() showFooter = true;
  @Input() confirmLabel = 'Confirm';
  @Input() cancelLabel = 'Cancel';
  @Output() confirmed = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  closeModal(): void {
    this.isOpen = false;
    this.closed.emit();
  }

  confirm(): void {
    this.confirmed.emit();
    this.closeModal();
  }
}
