import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  BadgeComponent,
  StatMetricComponent,
  ButtonComponent,
  TimelineComponent,
  TableComponent,
  BreadcrumbComponent,
} from '@app/shared/components';
import { TimelineItem, TableColumn } from '@app/shared/components';
import { DateUtilService } from '@app/shared/services';

interface DashboardMetric {
  label: string;
  value: string | number;
  icon: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
}

interface MissionCard {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'pending' | 'completed' | 'at-risk';
  priority: 'critical' | 'high' | 'medium' | 'low';
  progress: number;
  owner: string;
  dueDate: Date;
}

interface TaskItem {
  id: string;
  title: string;
  status: string;
  dueDate: Date;
}

@Component({
  selector: 'app-dashboard-rich',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    BadgeComponent,
    StatMetricComponent,
    ButtonComponent,
    TimelineComponent,
    TableComponent,
    BreadcrumbComponent,
  ],
  template: `
    <div class="dashboard-container">
      <!-- Breadcrumb -->
      <app-breadcrumb [items]="breadcrumbItems" class="breadcrumb"></app-breadcrumb>

      <!-- Page Header -->
      <div class="page-header">
        <div class="header-content">
          <h1>Dashboard</h1>
          <p>Welcome back to your operational cockpit</p>
        </div>
        <div class="header-actions">
          <app-button variant="secondary">📊 Export</app-button>
          <app-button variant="primary">⚙️ Customize</app-button>
        </div>
      </div>

      <!-- Key Metrics -->
      <section class="metrics-section">
        <h2 class="section-title">Key Metrics</h2>
        <div class="metrics-grid">
          <app-stat-metric
            *ngFor="let metric of metrics"
            [label]="metric.label"
            [value]="metric.value"
            [icon]="metric.icon"
            [trend]="metric.trend"
            [trendValue]="metric.trendValue"
          ></app-stat-metric>
        </div>
      </section>

      <!-- Mission Status Overview -->
      <section class="missions-section">
        <div class="section-header">
          <h2 class="section-title">Active Missions</h2>
          <app-button variant="ghost" size="sm">View All →</app-button>
        </div>
        <div class="missions-grid">
          <app-card
            *ngFor="let mission of activeMissions"
            [title]="mission.title"
            [subtitle]="mission.description"
            [badge]="formatPriority(mission.priority)"
            class="mission-card"
          >
            <div class="mission-content">
              <div class="mission-meta">
                <span class="meta-item">👤 {{ mission.owner }}</span>
                <span class="meta-item">📅 {{ formatDate(mission.dueDate) }}</span>
              </div>
              <div class="progress-container">
                <div class="progress-bar">
                  <div class="progress-fill" [style.width.%]="mission.progress"></div>
                </div>
                <span class="progress-text">{{ mission.progress }}%</span>
              </div>
              <div class="mission-status">
                <app-badge
                  [variant]="getStatusVariant(mission.status)"
                  size="sm"
                >
                  {{ formatStatus(mission.status) }}
                </app-badge>
              </div>
            </div>
          </app-card>
        </div>
      </section>

      <!-- Intelligence Feed -->
      <section class="intelligence-section">
        <div class="section-header">
          <h2 class="section-title">Latest Intelligence</h2>
          <app-button variant="ghost" size="sm">View All →</app-button>
        </div>
        <app-timeline [items]="timelineItems" class="timeline"></app-timeline>
      </section>

      <!-- Priority Tasks -->
      <section class="tasks-section">
        <div class="section-header">
          <h2 class="section-title">Priority Tasks</h2>
          <app-button variant="ghost" size="sm">+ Add Task</app-button>
        </div>
        <app-table
          [data]="priorityTasks"
          [columns]="taskColumns"
          class="tasks-table"
        ></app-table>
      </section>

      <!-- System Health -->
      <section class="system-health-section">
        <h2 class="section-title">System Health</h2>
        <div class="health-grid">
          <app-card title="API Status" icon="🔌" badge="OPERATIONAL">
            <div class="health-content">
              <div class="health-indicator healthy"></div>
              <span>All systems operational</span>
            </div>
          </app-card>

          <app-card title="Database" icon="💾" badge="HEALTHY">
            <div class="health-content">
              <div class="health-indicator healthy"></div>
              <span>Response time: 45ms</span>
            </div>
          </app-card>

          <app-card title="Cache" icon="⚡" badge="ACTIVE">
            <div class="health-content">
              <div class="health-indicator healthy"></div>
              <span>Hit rate: 94%</span>
            </div>
          </app-card>

          <app-card title="AI Agents" icon="🤖" badge="RUNNING">
            <div class="health-content">
              <div class="health-indicator healthy"></div>
              <span>5 agents active</span>
            </div>
          </app-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 1600px;
      margin: 0 auto;
    }

    .breadcrumb {
      margin-bottom: 24px;
    }

    .page-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 40px;
    }

    .header-content h1 {
      margin: 0 0 8px 0;
      font-size: 36px;
      font-weight: 700;
      color: #F8FAFC;
    }

    .header-content p {
      margin: 0;
      color: #94A3B8;
      font-size: 14px;
    }

    .header-actions {
      display: flex;
      gap: 12px;
    }

    /* Sections */
    section {
      margin-bottom: 48px;
    }

    .section-title {
      margin: 0 0 20px 0;
      font-size: 20px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .section-header .section-title {
      margin: 0;
    }

    /* Metrics Grid */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    /* Missions Grid */
    .missions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 16px;
    }

    .mission-card {
      cursor: pointer;
    }

    .mission-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .mission-meta {
      display: flex;
      gap: 16px;
      font-size: 12px;
      color: #94A3B8;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .progress-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .progress-bar {
      flex: 1;
      height: 6px;
      background-color: rgba(148, 163, 184, 0.1);
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #3B82F6 0%, #1E40AF 100%);
      transition: width 0.3s ease;
    }

    .progress-text {
      font-size: 12px;
      color: #94A3B8;
      min-width: 35px;
    }

    .mission-status {
      display: flex;
      gap: 8px;
    }

    /* Timeline */
    .timeline {
      background-color: #0B0F19;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 12px;
      padding: 20px;
    }

    /* Tasks Table */
    .tasks-table {
      border-radius: 12px;
      overflow: hidden;
    }

    /* System Health */
    .health-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
    }

    .health-content {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 13px;
      color: #94A3B8;
    }

    .health-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .health-indicator.healthy {
      background-color: #22C55E;
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }

    @media (max-width: 768px) {
      .page-header {
        flex-direction: column;
        gap: 16px;
      }

      .header-actions {
        width: 100%;
        flex-wrap: wrap;
      }

      .metrics-grid {
        grid-template-columns: 1fr;
      }

      .missions-grid {
        grid-template-columns: 1fr;
      }

      .health-grid {
        grid-template-columns: repeat(2, 1fr);
      }
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

    section {
      animation: fadeIn 0.3s ease;
    }
  `],
})
export class DashboardRichComponent implements OnInit {
  breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard' },
  ];

  metrics: DashboardMetric[] = [
    {
      label: 'Active Missions',
      value: 12,
      icon: '🎯',
      trend: 'up',
      trendValue: '+2 this week',
    },
    {
      label: 'Tasks Completed',
      value: 89,
      icon: '✅',
      trend: 'up',
      trendValue: '+12%',
    },
    {
      label: 'Risk Level',
      value: 'Medium',
      icon: '⚠️',
      trend: 'down',
      trendValue: '-5%',
    },
    {
      label: 'Team Efficiency',
      value: '94%',
      icon: '📈',
      trend: 'up',
      trendValue: '+3%',
    },
  ];

  activeMissions: MissionCard[] = [
    {
      id: '1',
      title: 'Project Alpha',
      description: 'Core platform development',
      status: 'active',
      priority: 'critical',
      progress: 75,
      owner: 'Alice Chen',
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    {
      id: '2',
      title: 'Intelligence Pipeline',
      description: 'Data processing optimization',
      status: 'active',
      priority: 'high',
      progress: 60,
      owner: 'Bob Smith',
      dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    },
    {
      id: '3',
      title: 'Security Audit',
      description: 'System vulnerability assessment',
      status: 'at-risk',
      priority: 'critical',
      progress: 40,
      owner: 'Carol White',
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
  ];

  timelineItems: TimelineItem[] = [
    {
      id: '1',
      title: 'System Alert',
      description: 'High CPU usage detected on production servers',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      type: 'alert',
      icon: '🔴',
    },
    {
      id: '2',
      title: 'Milestone Reached',
      description: 'Project Alpha reached 75% completion',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      type: 'milestone',
      icon: '🎉',
    },
    {
      id: '3',
      title: 'Team Update',
      description: 'Weekly sync completed successfully',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      type: 'event',
      icon: '📝',
    },
  ];

  priorityTasks: TaskItem[] = [
    { id: '1', title: 'Review API documentation', status: 'In Progress', dueDate: new Date() },
    { id: '2', title: 'Update database schema', status: 'Pending', dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000) },
    { id: '3', title: 'Deploy v2.1 release', status: 'In Progress', dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
  ];

  taskColumns: TableColumn<TaskItem>[] = [
    { key: 'title', label: 'Task', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'dueDate', label: 'Due Date', sortable: true },
  ];

  constructor(private dateUtil: DateUtilService) {}

  ngOnInit(): void {
    console.log('Dashboard initialized');
  }

  formatDate(date: Date): string {
    return this.dateUtil.formatDate(date, 'MMM dd');
  }

  formatStatus(status: string): string {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  formatPriority(priority: string): string {
    const priorityMap: Record<string, string> = {
      critical: '🔴 Critical',
      high: '🟠 High',
      medium: '🟡 Medium',
      low: '🟢 Low',
    };
    return priorityMap[priority] || priority;
  }

  getStatusVariant(
    status: string
  ): 'primary' | 'success' | 'warning' | 'danger' | 'secondary' {
    const statusMap: Record<string, any> = {
      active: 'primary',
      pending: 'warning',
      completed: 'success',
      'at-risk': 'danger',
    };
    return statusMap[status] || 'secondary';
  }
}
