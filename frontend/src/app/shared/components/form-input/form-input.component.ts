import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface InputConfig {
  type: 'text' | 'email' | 'password' | 'number' | 'date' | 'textarea';
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-group">
      <label *ngIf="label" class="input-label">{{ label }}</label>
      <textarea
        *ngIf="type === 'textarea'"
        [value]="value"
        [placeholder]="placeholder"
        [disabled]="disabled"
        (input)="onInput($event)"
        class="form-input textarea"
      ></textarea>
      <input
        *ngIf="type !== 'textarea'"
        [type]="type"
        [value]="value"
        [placeholder]="placeholder"
        [disabled]="disabled"
        (input)="onInput($event)"
        class="form-input"
      />
      <span *ngIf="error" class="input-error">{{ error }}</span>
    </div>
  `,
  styles: [`
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .input-label {
      font-size: 13px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .form-input {
      padding: 10px 12px;
      background-color: rgba(148, 163, 184, 0.1);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 8px;
      color: #F8FAFC;
      font-size: 14px;
      font-family: inherit;
      transition: all 0.2s ease;
    }

    .form-input:focus {
      outline: none;
      border-color: #3B82F6;
      background-color: rgba(148, 163, 184, 0.15);
    }

    .form-input:disabled {
      background-color: rgba(148, 163, 184, 0.05);
      color: #94A3B8;
      cursor: not-allowed;
    }

    .form-input::placeholder {
      color: #94A3B8;
    }

    .textarea {
      min-height: 100px;
      resize: vertical;
    }

    .input-error {
      font-size: 12px;
      color: #EF4444;
    }
  `],
})
export class FormInputComponent {
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'date' | 'textarea' = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() error: string | null = null;
  @Input() disabled = false;
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.valueChange.emit(value);
  }
}
