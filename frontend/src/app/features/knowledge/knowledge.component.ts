import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="knowledge-container">
      <div class="page-header">
        <h1>Knowledge Base</h1>
        <p>Your operational wiki and second brain</p>
      </div>

      <div class="placeholder-content">
        <p>Knowledge Module - Phase 5</p>
      </div>
    </div>
  `,
  styles: [`
    .knowledge-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .page-header {
      margin-bottom: 32px;
    }

    .page-header h1 {
      margin: 0 0 8px 0;
      font-size: 32px;
      font-weight: 700;
      color: #F8FAFC;
    }

    .page-header p {
      margin: 0;
      color: #94A3B8;
      font-size: 14px;
    }

    .placeholder-content {
      background-color: #131A2A;
      border: 1px dashed rgba(148, 163, 184, 0.2);
      border-radius: 12px;
      padding: 60px 40px;
      text-align: center;
      color: #94A3B8;
    }
  `],
})
export class KnowledgeComponent {}
