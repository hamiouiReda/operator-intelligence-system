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
  selector: 'app-settings-rich',
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
    <div class="settings-container">
      <app-breadcrumb [items]="breadcrumbItems" class="breadcrumb"></app-breadcrumb>

      <div class="page-header">
        <div class="header-content">
          <h1>Settings</h1>
          <p>Configure your OIS experience</p>
        </div>
      </div>

      <!-- Settings Sections -->
      <div class="settings-grid">
        <!-- Profile Settings -->
        <app-card title="Profile" icon="👤" badge="ACCOUNT">
          <div class="settings-content">
            <app-form-input
              type="text"
              label="Full Name"
              placeholder="Your name"
            ></app-form-input>
            <app-form-input
              type="email"
              label="Email"
              placeholder="your@email.com"
            ></app-form-input>
            <app-button variant="primary" size="sm">Save Changes</app-button>
          </div>
        </app-card>

        <!-- Security Settings -->
        <app-card title="Security" icon="🔒" badge="SECURE">
          <div class="settings-content">
            <div class="setting-item">
              <span class="setting-label">Two-Factor Authentication</span>
              <span class="setting-status enabled">Enabled</span>
            </div>
            <div class="setting-item">
              <span class="setting-label">Password Last Changed</span>
              <span class="setting-value">30 days ago</span>
            </div>
            <app-button variant="secondary" size="sm">Change Password</app-button>
          </div>
        </app-card>

        <!-- Notification Settings -->
        <app-card title="Notifications" icon="🔔" badge="PREFERENCES">
          <div class="settings-content">
            <div class="notification-item">
              <input type="checkbox" id="email-alerts" checked />
              <label for="email-alerts">Email Alerts</label>
            </div>
            <div class="notification-item">
              <input type="checkbox" id="slack-notifications" checked />
              <label for="slack-notifications">Slack Notifications</label>
            </div>
            <div class="notification-item">
              <input type="checkbox" id="daily-digest" />
              <label for="daily-digest">Daily Digest</label>
            </div>
          </div>
        </app-card>

        <!-- Integration Settings -->
        <app-card title="Integrations" icon="🔗" badge="CONNECTED">
          <div class="settings-content">
            <div class="integration-item">
              <span class="integration-name">Slack</span>
              <span class="integration-status connected">Connected</span>
            </div>
            <div class="integration-item">
              <span class="integration-name">GitHub</span>
              <span class="integration-status connected">Connected</span>
            </div>
            <div class="integration-item">
              <span class="integration-name">Jira</span>
              <span class="integration-status">Not Connected</span>
            </div>
            <app-button variant="secondary" size="sm">Manage Integrations</app-button>
          </div>
        </app-card>

        <!-- API Settings -->
        <app-card title="API Keys" icon="🔑" badge="DEVELOPER">
          <div class="settings-content">
            <p class="api-description">Manage your API keys for programmatic access</p>
            <app-button variant="secondary" size="sm">Generate New Key</app-button>
            <app-button variant="ghost" size="sm">View Documentation</app-button>
          </div>
        </app-card>

        <!-- Workspace Settings -->
        <app-card title="Workspace" icon="🏢" badge="TEAM">
          <div class="settings-content">
            <div class="workspace-info">
              <span class="label">Workspace Name</span>
              <span class="value">ACME Operations</span>
            </div>
            <div class="workspace-info">
              <span class="label">Team Members</span>
              <span class="value">24</span>
            </div>
            <app-button variant="secondary" size="sm">Manage Team</app-button>
          </div>
        </app-card>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .breadcrumb {
      margin-bottom: 24px;
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

    .settings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 16px;
    }

    .settings-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .setting-item,
    .integration-item,
    .workspace-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      font-size: 13px;
    }

    .setting-label,
    .integration-name,
    .label {
      color: #94A3B8;
    }

    .setting-status,
    .integration-status,
    .value {
      color: #F8FAFC;
      font-weight: 500;
    }

    .setting-status.enabled {
      color: #22C55E;
    }

    .integration-status.connected {
      color: #22C55E;
    }

    .notification-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .notification-item input[type='checkbox'] {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    .notification-item label {
      color: #94A3B8;
      font-size: 13px;
      cursor: pointer;
    }

    .api-description {
      margin: 0 0 8px 0;
      font-size: 12px;
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

    .settings-grid {
      animation: fadeIn 0.3s ease;
    }
  `],
})
export class SettingsRichComponent implements OnInit {
  breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Settings' },
  ];

  ngOnInit(): void {
    console.log('Settings module initialized');
  }
}
