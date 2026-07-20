import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'command-center',
        loadComponent: () =>
          import('./features/command-center/command-center.component').then(
            (m) => m.CommandCenterComponent
          ),
      },
      {
        path: 'intelligence',
        loadComponent: () =>
          import('./features/intelligence/intelligence.component').then(
            (m) => m.IntelligenceComponent
          ),
      },
      {
        path: 'knowledge',
        loadComponent: () =>
          import('./features/knowledge/knowledge.component').then(
            (m) => m.KnowledgeComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/reports/reports.component').then(
            (m) => m.ReportsComponent
          ),
      },
      {
        path: 'ai',
        loadComponent: () =>
          import('./features/ai-agents/ai-agents.component').then(
            (m) => m.AiAgentsComponent
          ),
      },
      {
        path: 'automation',
        loadComponent: () =>
          import('./features/automation/automation.component').then(
            (m) => m.AutomationComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./features/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
