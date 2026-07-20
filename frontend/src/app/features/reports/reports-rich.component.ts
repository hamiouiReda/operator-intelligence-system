import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  BadgeComponent,
  ButtonComponent,
  BreadcrumbComponent,
  FormInputComponent,
} from '@app/shared/components';

@Component({
  selector: 'app-reports-rich',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    BadgeComponent,
    ButtonComponent,
    BreadcrumbComponent,
    FormInputComponent,
  ],
  template: `
    <div class="reports-container">
      <app-breadcrumb [items]="breadcrumbItems" class="breadcrumb"></app-breadcrumb>

      <div class="page-header">
        <div class="header-content">
          <h1>Reports</h1>
          <p>Weekly, monthly, and annual reviews</p>
        </div>
        <div class="header-actions">
          <app-button variant="secondary">📋 Export</app-button>
          <app-button variant="primary">+ Generate Report</app-button>
        </div>
      </div>

      <!-- Quick Stats -->
      <div class="quick-stats">
        <app-card title="This Week" icon="📅" badge="7 days">
          <div class="stat-content">
            <div class="stat-item">
              <span class="label">Tasks Completed</span>
              <span class="value">42</span>
            </div>
            <div class="stat-item">
              <span class="label">Hours Logged</span>
              <span class="value">156h</span>
            </div>
          </div>
        </app-card>

        <app-card title="This Month" icon="📋" badge="30 days">
          <div class="stat-content">
            <div class="stat-item">
              <span class="label">Missions Completed</span>
              <span class="value">8</span>
            </div>
            <div class="stat-item">
              <span class="label">Team Efficiency</span>
              <span class="value">94%</span>
            </div>
          </div>
        </app-card>

        <app-card title="This Year" icon="📄" badge="365 days">
          <div class="stat-content">
            <div class="stat-item">
              <span class="label">Projects Delivered</span>
              <span class="value">24</span>
            </div>
            <div class="stat-item">
              <span class="label">Revenue Generated</span>
              <span class="value">$2.4M</span>
            </div>
          </div>
        </app-card>
      </div>

      <!-- Reports List -->
      <section class="reports-section">
        <h2>Available Reports</h2>
        <div class="reports-grid">
          <app-card
            *ngFor="let report of availableReports"
            [title]="report.title"
            [subtitle]="report.description"
            [badge]="report.type"
          >
            <div class="report-actions">
              <app-button variant="secondary" size="sm">View</app-button>
              <app-button variant="ghost" size="sm">Download</app-button>
            </div>
          </app-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .reports-container {
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

    .header-actions {
      display: flex;
      gap: 12px;
    }

    .quick-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .stat-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .label {
      font-size: 12px;
      color: #94A3B8;
      font-weight: 500;
    }

    .value {
      font-size: 18px;
      font-weight: 700;
      color: #3B82F6;
    }

    .reports-section {
      animation: fadeIn 0.3s ease;
    }

    h2 {
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .reports-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }

    .report-actions {
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
export class ReportsRichComponent implements OnInit {
  breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Reports' },
  ];

  availableReports = [
    {
      title: 'Weekly Executive Summary',
      description: 'Key metrics and highlights from the week',
      type: 'WEEKLY',
    },
    {
      title: 'Monthly Performance Review',
      description: 'Comprehensive analysis of monthly performance',
      type: 'MONTHLY',
    },
    {
      title: 'Quarterly Business Review',
      description: 'Strategic review and quarterly metrics',
      type: 'QUARTERLY',
    },
    {
      title: 'Annual Report',
      description: 'Complete year-in-review and next year planning',
      type: 'ANNUAL',
    },
  ];

  ngOnInit(): void {
    console.log('Reports module initialized');
  }
}
