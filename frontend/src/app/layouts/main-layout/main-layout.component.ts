import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ContextPanelComponent } from '../context-panel/context-panel.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    TopBarComponent,
    ContextPanelComponent,
  ],
  template: `
    <div class="layout-container">
      <app-sidebar class="sidebar" />
      <div class="main-area">
        <app-top-bar class="top-bar" />
        <div class="content-wrapper">
          <div class="main-content">
            <router-outlet></router-outlet>
          </div>
          <app-context-panel class="context-panel" />
        </div>
      </div>
    </div>
  `,
  styles: [`
    .layout-container {
      display: flex;
      height: 100vh;
      background-color: #0B0F19;
      color: #F8FAFC;
    }

    .sidebar {
      width: 260px;
      background-color: #0B0F19;
      border-right: 1px solid rgba(148, 163, 184, 0.1);
      overflow-y: auto;
    }

    .main-area {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .top-bar {
      height: 64px;
      background-color: #131A2A;
      border-bottom: 1px solid rgba(148, 163, 184, 0.1);
    }

    .content-wrapper {
      flex: 1;
      display: flex;
      overflow: hidden;
    }

    .main-content {
      flex: 1;
      overflow-y: auto;
      padding: 24px;
    }

    .context-panel {
      width: 320px;
      background-color: #131A2A;
      border-left: 1px solid rgba(148, 163, 184, 0.1);
      overflow-y: auto;
      display: none;
    }

    @media (min-width: 1200px) {
      .context-panel {
        display: block;
      }
    }
  `],
})
export class MainLayoutComponent {}
