import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  BadgeComponent,
  ButtonComponent,
  BreadcrumbComponent,
  FormInputComponent,
  TimelineComponent,
} from '@app/shared/components';
import { TimelineItem } from '@app/shared/components';

@Component({
  selector: 'app-automation-rich',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    BadgeComponent,
    ButtonComponent,
    BreadcrumbComponent,
    FormInputComponent,
    TimelineComponent,
  ],
  template: `
    <div class="automation-container">
      <app-breadcrumb [items]="breadcrumbItems" class="breadcrumb"></app-breadcrumb>

      <div class="page-header">
        <div class="header-content">
          <h1>Automation</h1>
          <p>Configure workflows and triggers</p>
        </div>
        <div class="header-actions">
          <app-button variant="primary">+ New Workflow</app-button>
        </div>
      </div>

      <!-- Workflow Stats -->
      <div class="workflow-stats">
        <app-card title="Active Workflows" icon="⚡" badge="RUNNING">
          <div class="stat-number">12</div>
        </app-card>
        <app-card title="Executions Today" icon="📊" badge="TRACKED">
          <div class="stat-number">1,245</div>
        </app-card>
        <app-card title="Success Rate" icon="✅" badge="HIGH">
          <div class="stat-number">99.2%</div>
        </app-card>
        <app-card title="Avg Execution" icon="⏱" badge="FAST">
          <div class="stat-number">342ms</div>
        </app-card>
      </div>

      <!-- Workflow Templates -->
      <section class="templates-section">
        <h2>Popular Workflows</h2>
        <div class="templates-grid">
          <app-card
            *ngFor="let template of workflowTemplates"
            [title]="template.name"
            [subtitle]="template.description"
            [badge]="template.trigger"
          >
            <div class="template-actions">
              <app-button variant="secondary" size="sm">Use Template</app-button>
            </div>
          </app-card>
        </div>
      </section>

      <!-- Recent Executions -->
      <section class="executions-section">
        <h2>Recent Executions</h2>
        <app-timeline [items]="executionTimeline"></app-timeline>
      </section>
    </div>
  `,
  styles: [`
    .automation-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .breadcrumb {
      margin-bottom: 24px;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
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

    .workflow-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .stat-number {
      font-size: 28px;
      font-weight: 700;
      color: #3B82F6;
      margin-top: 8px;
    }

    .templates-section,
    .executions-section {
      animation: fadeIn 0.3s ease;
      margin-bottom: 32px;
    }

    h2 {
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .templates-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 16px;
    }

    .template-actions {
      display: flex;
      gap: 8px;
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
export class AutomationRichComponent implements OnInit {
  breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Automation' },
  ];

  workflowTemplates = [
    {
      name: 'Slack Notifications',
      description: 'Send alerts to Slack channels',
      trigger: 'EVENT',
    },
    {
      name: 'Email Digest',
      description: 'Generate and send email summaries',
      trigger: 'SCHEDULE',
    },
    {
      name: 'Data Sync',
      description: 'Sync data across systems',
      trigger: 'SCHEDULE',
    },
    {
      name: 'Alert Manager',
      description: 'Route and escalate alerts',
      trigger: 'EVENT',
    },
  ];

  executionTimeline: TimelineItem[] = [
    {
      id: '1',
      title: 'Email Digest Sent',
      description: 'Daily digest sent to 450 users',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: 'milestone',
      icon: '📧',
    },
    {
      id: '2',
      title: 'Slack Notification',
      description: 'Alert broadcast to engineering channel',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      type: 'event',
      icon: '💬',
    },
    {
      id: '3',
      title: 'Data Sync Completed',
      description: 'Synchronized 50,000 records',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      type: 'milestone',
      icon: '🔄',
    },
  ];

  ngOnInit(): void {
    console.log('Automation module initialized');
  }
}
