import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarItem {
  label: string;
  path: string;
  icon: string;
  children?: SidebarItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="sidebar-content">
      <div class="sidebar-header">
        <div class="logo">
          <div class="logo-icon">OIS</div>
          <div class="logo-text">Operator</div>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section">
          <div class="nav-label">Command</div>
          <a
            *ngFor="let item of commandItems"
            [routerLink]="item.path"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-label">{{ item.label }}</span>
          </a>
        </div>

        <div class="nav-section">
          <div class="nav-label">Operations</div>
          <a
            *ngFor="let item of operationItems"
            [routerLink]="item.path"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-label">{{ item.label }}</span>
          </a>
        </div>

        <div class="nav-section">
          <div class="nav-label">Intelligence</div>
          <a
            *ngFor="let item of intelligenceItems"
            [routerLink]="item.path"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-label">{{ item.label }}</span>
          </a>
        </div>

        <div class="nav-section">
          <div class="nav-label">Resources</div>
          <a
            *ngFor="let item of resourceItems"
            [routerLink]="item.path"
            routerLinkActive="active"
            class="nav-item"
          >
            <span class="nav-icon">{{ item.icon }}</span>
            <span class="nav-label">{{ item.label }}</span>
          </a>
        </div>
      </nav>

      <div class="sidebar-footer">
        <a
          routerLink="/settings"
          routerLinkActive="active"
          class="nav-item"
        >
          <span class="nav-icon">⚙️</span>
          <span class="nav-label">Settings</span>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .sidebar-content {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0;
    }

    .sidebar-header {
      padding: 20px 16px;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }

    .logo-icon {
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 12px;
      color: white;
    }

    .logo-text {
      font-weight: 600;
      font-size: 14px;
      color: #F8FAFC;
    }

    .sidebar-nav {
      flex: 1;
      overflow-y: auto;
      padding: 12px 0;
    }

    .nav-section {
      padding: 12px 0;
    }

    .nav-label {
      padding: 8px 16px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      color: #94A3B8;
      letter-spacing: 0.5px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 16px;
      color: #94A3B8;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
      margin: 0 8px;
      border-radius: 8px;
    }

    .nav-item:hover {
      background-color: rgba(59, 130, 246, 0.1);
      color: #3B82F6;
    }

    .nav-item.active {
      background-color: rgba(59, 130, 246, 0.15);
      color: #3B82F6;
      font-weight: 500;
    }

    .nav-icon {
      font-size: 16px;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .sidebar-footer {
      padding: 12px 0;
      border-top: 1px solid rgba(148, 163, 184, 0.1);
    }
  `],
})
export class SidebarComponent {
  commandItems: SidebarItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'Command Center', path: '/command-center', icon: '🎯' },
  ];

  operationItems: SidebarItem[] = [
    { label: 'Projects', path: '/projects', icon: '📁' },
    { label: 'Reports', path: '/reports', icon: '📋' },
    { label: 'Automation', path: '/automation', icon: '⚡' },
  ];

  intelligenceItems: SidebarItem[] = [
    { label: 'Intelligence', path: '/intelligence', icon: '🧠' },
    { label: 'Knowledge', path: '/knowledge', icon: '📚' },
  ];

  resourceItems: SidebarItem[] = [
    { label: 'AI Agents', path: '/ai', icon: '🤖' },
  ];
}
