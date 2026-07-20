import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-context-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="context-panel-container">
      <div class="panel-header">
        <h3>Context</h3>
        <button class="close-button">×</button>
      </div>

      <div class="panel-content">
        <div class="context-section">
          <h4>Related Items</h4>
          <div class="context-item">No items selected</div>
        </div>

        <div class="context-section">
          <h4>Quick Actions</h4>
          <div class="quick-action">+ Create New</div>
          <div class="quick-action">🔗 Link</div>
          <div class="quick-action">📌 Pin</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .context-panel-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #131A2A;
    }

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .panel-header h3 {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .close-button {
      background: none;
      border: none;
      color: #94A3B8;
      font-size: 20px;
      cursor: pointer;
      padding: 0;
    }

    .panel-content {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
    }

    .context-section {
      margin-bottom: 16px;
    }

    .context-section h4 {
      margin: 0 0 8px 0;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      color: #94A3B8;
      letter-spacing: 0.5px;
    }

    .context-item,
    .quick-action {
      padding: 8px;
      background-color: rgba(148, 163, 184, 0.1);
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 6px;
      color: #94A3B8;
      font-size: 12px;
      margin-bottom: 6px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .context-item:hover,
    .quick-action:hover {
      background-color: rgba(59, 130, 246, 0.1);
      border-color: #3B82F6;
      color: #3B82F6;
    }
  `],
})
export class ContextPanelComponent {}
