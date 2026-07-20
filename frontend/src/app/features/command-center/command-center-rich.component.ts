import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  BadgeComponent,
  TimelineComponent,
  FormInputComponent,
  ButtonComponent,
} from '@app/shared/components';
import { TimelineItem } from '@app/shared/components';

@Component({
  selector: 'app-command-center-rich',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    BadgeComponent,
    TimelineComponent,
    FormInputComponent,
    ButtonComponent,
  ],
  template: `
    <div class="command-center-container">
      <div class="page-header">
        <h1>Command Center</h1>
        <p>Strategic mission planning and decision tracking</p>
      </div>

      <!-- Navigation Tabs -->
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

      <!-- Vision Section -->
      <section *ngIf="activeTab === 'Vision'" class="command-section">
        <h2>North Star</h2>
        <app-card title="OIS Vision" icon="🌟" badge="STRATEGIC">
          <p class="section-content">
            Build the world's most powerful operational intelligence system for
            enterprise operators managing complex missions, risks, and knowledge.
          </p>
        </app-card>

        <h2 style="margin-top: 24px">Core Values</h2>
        <div class="values-grid">
          <app-card title="Autonomy" icon="🎯">
            <p class="section-content">Empower operators with complete data independence</p>
          </app-card>
          <app-card title="Intelligence" icon="🧠">
            <p class="section-content">AI-driven insights for better decision-making</p>
          </app-card>
          <app-card title="Velocity" icon="⚡">
            <p class="section-content">Execute faster than the competition</p>
          </app-card>
          <app-card title="Resilience" icon="🛡️">
            <p class="section-content">Built to withstand operational challenges</p>
          </app-card>
        </div>
      </section>

      <!-- Objectives Section -->
      <section *ngIf="activeTab === 'Objectives'" class="command-section">
        <h2>Yearly Objectives</h2>
        <div class="objectives-list">
          <app-card
            *ngFor="let obj of yearlyObjectives"
            [title]="obj.title"
            [subtitle]="obj.description"
            [badge]="obj.status"
          >
            <div class="objective-content">
              <div class="progress-bar">
                <div class="progress-fill" [style.width.%]="obj.progress"></div>
              </div>
              <span class="progress-text">{{ obj.progress }}% Complete</span>
            </div>
          </app-card>
        </div>

        <h2 style="margin-top: 24px">Quarterly Priorities</h2>
        <div class="priorities-list">
          <app-card
            *ngFor="let priority of quarterlyPriorities"
            [title]="priority.title"
            [badge]="priority.quarter"
          >
            <p class="section-content">{{ priority.description }}</p>
          </app-card>
        </div>
      </section>

      <!-- Decision Journal -->
      <section *ngIf="activeTab === 'Decisions'" class="command-section">
        <div class="section-header">
          <h2>Decision Journal</h2>
          <app-button variant="primary" size="sm">+ Log Decision</app-button>
        </div>
        <app-timeline [items]="decisionTimeline"></app-timeline>
      </section>
    </div>
  `,
  styles: [`
    .command-center-container {
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

    .tab-button:hover {
      color: #3B82F6;
    }

    .tab-button.active {
      color: #3B82F6;
      border-bottom-color: #3B82F6;
    }

    .command-section {
      animation: fadeIn 0.3s ease;
    }

    h2 {
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .section-header h2 {
      margin: 0;
    }

    .section-content {
      margin: 0;
      color: #94A3B8;
      line-height: 1.6;
      font-size: 14px;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .objectives-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 32px;
    }

    .objective-content {
      display: flex;
      align-items: center;
      gap: 12px;
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
      min-width: 80px;
    }

    .priorities-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
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
export class CommandCenterRichComponent implements OnInit {
  tabs = ['Vision', 'Objectives', 'Decisions'];
  activeTab = 'Vision';

  yearlyObjectives = [
    {
      title: 'Achieve 1M Users',
      description: 'Reach 1 million active users globally',
      status: 'ON TRACK',
      progress: 65,
    },
    {
      title: 'Enterprise Revenue',
      description: 'Generate $10M in enterprise subscriptions',
      status: 'AT RISK',
      progress: 45,
    },
    {
      title: 'Market Leadership',
      description: 'Establish as #1 platform in our category',
      status: 'IN PROGRESS',
      progress: 55,
    },
  ];

  quarterlyPriorities = [
    {
      title: 'Q1 - Foundation',
      quarter: 'Q1',
      description: 'Build core platform architecture and MVP launch',
    },
    {
      title: 'Q2 - Expansion',
      quarter: 'Q2',
      description: 'Add AI capabilities and multi-agent support',
    },
    {
      title: 'Q3 - Integration',
      quarter: 'Q3',
      description: 'Enterprise integrations and API ecosystem',
    },
    {
      title: 'Q4 - Scale',
      quarter: 'Q4',
      description: 'Performance optimization and global deployment',
    },
  ];

  decisionTimeline: TimelineItem[] = [
    {
      id: '1',
      title: 'Architecture Decision',
      description: 'Approved Angular + Go stack for OIS platform',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      type: 'event',
      icon: '⚙️',
    },
    {
      id: '2',
      title: 'Feature Prioritization',
      description: 'Prioritized AI agents and automation over reporting',
      timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000),
      type: 'milestone',
      icon: '📊',
    },
    {
      id: '3',
      title: 'Go-Live Decision',
      description: 'Approved production deployment for Q2 2024',
      timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000),
      type: 'milestone',
      icon: '🚀',
    },
  ];

  ngOnInit(): void {
    console.log('Command center initialized');
  }
}
