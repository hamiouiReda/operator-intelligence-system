import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="top-bar-container">
      <div class="search-area">
        <input
          type="text"
          placeholder="Search everything..."
          class="search-input"
          (keyup)="onSearch($event)"
        />
        <span class="search-icon">🔍</span>
      </div>

      <div class="top-bar-actions">
        <button class="command-button" (click)="openCommandPalette()">
          <span class="shortcut">Ctrl + K</span>
        </button>

        <button class="action-button" title="Notifications">
          🔔
        </button>

        <div class="user-menu">
          <button class="user-button" (click)="toggleUserMenu()">
            <div class="user-avatar">U</div>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .top-bar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      height: 100%;
      background-color: #131A2A;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .search-area {
      position: relative;
      flex: 1;
      max-width: 400px;
    }

    .search-input {
      width: 100%;
      padding: 8px 12px 8px 36px;
      background-color: rgba(148, 163, 184, 0.1);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 8px;
      color: #F8FAFC;
      font-size: 14px;
      transition: all 0.2s ease;
    }

    .search-input:focus {
      outline: none;
      border-color: #3B82F6;
      background-color: rgba(148, 163, 184, 0.15);
    }

    .search-input::placeholder {
      color: #94A3B8;
    }

    .search-icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      color: #94A3B8;
    }

    .top-bar-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-left: 24px;
    }

    .command-button {
      padding: 6px 12px;
      background-color: rgba(148, 163, 184, 0.1);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 6px;
      color: #94A3B8;
      font-size: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .command-button:hover {
      background-color: rgba(148, 163, 184, 0.15);
      border-color: rgba(148, 163, 184, 0.3);
    }

    .shortcut {
      font-family: 'Monaco', 'Courier New', monospace;
    }

    .action-button {
      background: none;
      border: none;
      color: #94A3B8;
      font-size: 18px;
      cursor: pointer;
      padding: 8px;
      transition: all 0.2s ease;
    }

    .action-button:hover {
      color: #F8FAFC;
    }

    .user-menu {
      position: relative;
    }

    .user-button {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
    }

    .user-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 14px;
      font-weight: 600;
    }
  `],
})
export class TopBarComponent {
  onSearch(event: KeyboardEvent): void {
    const query = (event.target as HTMLInputElement).value;
    console.log('Search query:', query);
  }

  openCommandPalette(): void {
    console.log('Command palette opened');
  }

  toggleUserMenu(): void {
    console.log('User menu toggled');
  }
}
