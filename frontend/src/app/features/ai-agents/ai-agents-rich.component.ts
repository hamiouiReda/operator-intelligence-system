import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  BadgeComponent,
  ButtonComponent,
  TableComponent,
  BreadcrumbComponent,
  StatusBadgeComponent,
} from '@app/shared/components';
import { TableColumn } from '@app/shared/components';

interface Agent {
  id: string;
  name: string;
  type: string;
  status: string;
  uptime: string;
}

@Component({
  selector: 'app-ai-agents-rich',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    BadgeComponent,
    ButtonComponent,
    TableComponent,
    BreadcrumbComponent,
    StatusBadgeComponent,
  ],
  template: `
    <div class="ai-agents-container">
      <app-breadcrumb [items]="breadcrumbItems" class="breadcrumb"></app-breadcrumb>

      <div class="page-header">
        <div class="header-content">
          <h1>AI Agents</h1>
          <p>Manage and orchestrate multi-agent workflows</p>
        </div>
        <div class="header-actions">
          <app-button variant="primary">+ Deploy Agent</app-button>
        </div>
      </div>

      <!-- Agent Stats -->
      <div class="agent-stats">
        <app-card title="Total Agents" icon="🤖" badge="ACTIVE">
          <div class="large-stat">8</div>
        </app-card>
        <app-card title="Running" icon="⚡" badge="OPERATIONAL">
          <div class="large-stat">6</div>
        </app-card>
        <app-card title="Success Rate" icon="✅" badge="HIGH">
          <div class="large-stat">98.5%</div>
        </app-card>
        <app-card title="Avg Response Time" icon="⏱" badge="FAST">
          <div class="large-stat">245ms</div>
        </app-card>
      </div>

      <!-- Agents Table -->
      <section class="agents-section">
        <h2>Active Agents</h2>
        <app-table
          [data]="agents"
          [columns]="agentColumns"
        ></app-table>
      </section>

      <!-- Agent Types -->
      <section class="agent-types-section">
        <h2>Agent Types</h2>
        <div class="agent-types-grid">
          <app-card title="Analyzer Agent" icon="📈" badge="5 RUNNING">
            <p class="agent-description">Processes and analyzes data streams</p>
          </app-card>
          <app-card title="Orchestrator Agent" icon="🎯" badge="2 RUNNING">
            <p class="agent-description">Coordinates multi-agent workflows</p>
          </app-card>
          <app-card title="Reporter Agent" icon="📋" badge="1 RUNNING">
            <p class="agent-description">Generates intelligence reports</p>
          </app-card>
          <app-card title="Monitor Agent" icon="🔍" badge="IDLE">
            <p class="agent-description">Monitors system health and alerts</p>
          </app-card>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .ai-agents-container {
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

    .agent-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .large-stat {
      font-size: 32px;
      font-weight: 700;
      color: #3B82F6;
      margin-top: 8px;
    }

    .agents-section,
    .agent-types-section {
      animation: fadeIn 0.3s ease;
      margin-bottom: 32px;
    }

    h2 {
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .agent-types-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .agent-description {
      margin: 0;
      font-size: 13px;
      color: #94A3B8;
      line-height: 1.5;
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
export class AiAgentsRichComponent implements OnInit {
  breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'AI Agents' },
  ];

  agents: Agent[] = [
    { id: '1', name: 'Analyzer-01', type: 'Data Analyzer', status: 'Running', uptime: '99.9%' },
    { id: '2', name: 'Orchestrator-01', type: 'Orchestrator', status: 'Running', uptime: '99.8%' },
    { id: '3', name: 'Reporter-01', type: 'Reporter', status: 'Running', uptime: '100%' },
  ];

  agentColumns: TableColumn<Agent>[] = [
    { key: 'name', label: 'Agent Name', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'uptime', label: 'Uptime', sortable: true },
  ];

  ngOnInit(): void {
    console.log('AI Agents module initialized');
  }
}
