import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  BadgeComponent,
  FormInputComponent,
  ButtonComponent,
  TableComponent,
  TimelineComponent,
} from '@app/shared/components';
import { TimelineItem, TableColumn } from '@app/shared/components';

interface IntelligenceItem {
  id: string;
  title: string;
  category: string;
  status: string;
}

@Component({
  selector: 'app-intelligence-rich',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    BadgeComponent,
    FormInputComponent,
    ButtonComponent,
    TableComponent,
    TimelineComponent,
  ],
  template: `
    <div class="intelligence-container">
      <div class="page-header">
        <h1>Intelligence</h1>
        <p>Collect, process, and analyze mission-critical data</p>
      </div>

      <!-- Navigation -->
      <div class="tabs-container">
        <div class="tab-list">
          <button
            *ngFor="let tab of tabs"
            [class.active]="activeTab === tab"
            (click)="activeTab = tab"
            class="tab-button"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Collection Inbox -->
      <section *ngIf="activeTab === 'Collection'" class="intelligence-section">
        <div class="section-header">
          <h2>Collection Inbox</h2>
          <app-button variant="primary" size="sm">+ Add Intelligence</app-button>
        </div>
        <app-table
          [data]="collectionData"
          [columns]="collectionColumns"
        ></app-table>
      </section>

      <!-- Verification Queue -->
      <section *ngIf="activeTab === 'Verification'" class="intelligence-section">
        <h2>Verification Queue</h2>
        <div class="verification-grid">
          <app-card
            *ngFor="let item of verificationQueue"
            [title]="item.title"
            [subtitle]="item.source"
            badge="PENDING"
          >
            <div class="verification-content">
              <p class="item-description">{{ item.description }}</p>
              <div class="verification-actions">
                <app-button variant="success" size="sm">✓ Verify</app-button>
                <app-button variant="danger" size="sm">✗ Reject</app-button>
              </div>
            </div>
          </app-card>
        </div>
      </section>

      <!-- Analysis Workspace -->
      <section *ngIf="activeTab === 'Analysis'" class="intelligence-section">
        <h2>Analysis Workspace</h2>
        <div class="analysis-grid">
          <app-card title="Threat Assessment" icon="🚨" badge="CRITICAL">
            <p class="section-content">
              15 critical threats identified and tracked
            </p>
          </app-card>
          <app-card title="Opportunity Matrix" icon="💡" badge="8 ITEMS">
            <p class="section-content">
              Strategic opportunities awaiting evaluation
            </p>
          </app-card>
          <app-card title="Risk Dashboard" icon="⚠️" badge="ACTIVE">
            <p class="section-content">
              Real-time risk metrics and exposure analysis
            </p>
          </app-card>
          <app-card title="Trend Analysis" icon="📈" badge="UPDATING">
            <p class="section-content">
              Key trends and pattern recognition insights
            </p>
          </app-card>
        </div>
      </section>

      <!-- Reports & Lessons -->
      <section *ngIf="activeTab === 'Reports'" class="intelligence-section">
        <h2>Intelligence Reports</h2>
        <app-timeline [items]="reportTimeline"></app-timeline>
      </section>
    </div>
  `,
  styles: [`
    .intelligence-container {
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

    .tabs-container {
      margin-bottom: 32px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .tab-list {
      display: flex;
      gap: 0;
    }

    .tab-button {
      padding: 12px 16px;
      background: none;
      border: none;
      color: #94A3B8;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
      margin-bottom: -1px;
    }

    .tab-button.active {
      color: #3B82F6;
      border-bottom-color: #3B82F6;
    }

    .intelligence-section {
      animation: fadeIn 0.3s ease;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    h2 {
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .section-header h2 {
      margin: 0;
    }

    .verification-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }

    .verification-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .item-description {
      margin: 0;
      font-size: 13px;
      color: #94A3B8;
      line-height: 1.5;
    }

    .verification-actions {
      display: flex;
      gap: 8px;
    }

    .analysis-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .section-content {
      margin: 0;
      font-size: 13px;
      color: #94A3B8;
      line-height: 1.6;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `],
})
export class IntelligenceRichComponent implements OnInit {
  tabs = ['Collection', 'Verification', 'Analysis', 'Reports'];
  activeTab = 'Collection';

  collectionData = [
    { id: '1', title: 'Market Shift Detected', category: 'MARKET', status: 'NEW' },
    { id: '2', title: 'Competitor Activity', category: 'COMPETITOR', status: 'PROCESSING' },
    { id: '3', title: 'Regulatory Update', category: 'COMPLIANCE', status: 'PROCESSED' },
  ];

  collectionColumns: TableColumn<any>[] = [
    { key: 'title', label: 'Title', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
  ];

  verificationQueue = [
    {
      id: '1',
      title: 'Market Analysis Report',
      source: 'Bloomberg Terminal',
      description: 'Quarterly market sentiment analysis',
    },
    {
      id: '2',
      title: 'Competitive Intelligence',
      source: 'CrunchBase',
      description: 'Competitor funding round details',
    },
    {
      id: '3',
      title: 'Industry Report',
      source: 'McKinsey',
      description: 'Sector growth trends and forecasts',
    },
  ];

  reportTimeline: TimelineItem[] = [
    {
      id: '1',
      title: 'Weekly Intelligence Brief',
      description: 'Comprehensive market and risk assessment',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      type: 'milestone',
      icon: '📋',
    },
    {
      id: '2',
      title: 'Threat Assessment Updated',
      description: '5 new threats identified and prioritized',
      timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000),
      type: 'alert',
      icon: '🚨',
    },
    {
      id: '3',
      title: 'Lessons Learned Session',
      description: 'Post-incident analysis from last week',
      timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000),
      type: 'event',
      icon: '📚',
    },
  ];

  ngOnInit(): void {
    console.log('Intelligence module initialized');
  }
}
