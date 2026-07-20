import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardComponent,
  BadgeComponent,
  ButtonComponent,
  TableComponent,
  BreadcrumbComponent,
  FormInputComponent,
} from '@app/shared/components';
import { TableColumn } from '@app/shared/components';

interface Project {
  id: string;
  name: string;
  owner: string;
  status: string;
  progress: number;
  dueDate: string;
}

@Component({
  selector: 'app-projects-rich',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    BadgeComponent,
    ButtonComponent,
    TableComponent,
    BreadcrumbComponent,
    FormInputComponent,
  ],
  template: `
    <div class="projects-container">
      <app-breadcrumb [items]="breadcrumbItems" class="breadcrumb"></app-breadcrumb>

      <div class="page-header">
        <div class="header-content">
          <h1>Projects</h1>
          <p>Manage timelines, milestones, and resources</p>
        </div>
        <div class="header-actions">
          <app-button variant="primary">➕ New Project</app-button>
        </div>
      </div>

      <!-- Stats -->
      <div class="stats-bar">
        <div class="stat">
          <span class="stat-label">Active</span>
          <span class="stat-value">8</span>
        </div>
        <div class="stat">
          <span class="stat-label">Completed</span>
          <span class="stat-value">24</span>
        </div>
        <div class="stat">
          <span class="stat-label">At Risk</span>
          <span class="stat-value">2</span>
        </div>
        <div class="stat">
          <span class="stat-label">Total Team</span>
          <span class="stat-value">45</span>
        </div>
      </div>

      <!-- Filters -->
      <div class="filters-section">
        <app-form-input
          type="text"
          placeholder="Search projects..."
          [value]="searchQuery"
          (valueChange)="searchQuery = $event"
        ></app-form-input>
      </div>

      <!-- Projects Table -->
      <section class="projects-section">
        <h2>All Projects</h2>
        <app-table
          [data]="projects"
          [columns]="projectColumns"
        ></app-table>
      </section>
    </div>
  `,
  styles: [`
    .projects-container {
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

    .stats-bar {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
      padding: 16px;
      background-color: #131A2A;
      border-radius: 12px;
      border: 1px solid rgba(148, 163, 184, 0.1);
    }

    .stat {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .stat-label {
      font-size: 12px;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
    }

    .stat-value {
      font-size: 24px;
      font-weight: 700;
      color: #F8FAFC;
    }

    .filters-section {
      margin-bottom: 32px;
    }

    .projects-section {
      animation: fadeIn 0.3s ease;
    }

    h2 {
      margin: 0 0 20px 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
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
export class ProjectsRichComponent implements OnInit {
  breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Projects' },
  ];

  searchQuery = '';

  projects: Project[] = [
    {
      id: '1',
      name: 'Platform Redesign',
      owner: 'Alice Chen',
      status: 'In Progress',
      progress: 65,
      dueDate: '2024-08-15',
    },
    {
      id: '2',
      name: 'API v2 Development',
      owner: 'Bob Smith',
      status: 'In Progress',
      progress: 45,
      dueDate: '2024-09-30',
    },
    {
      id: '3',
      name: 'Mobile App Launch',
      owner: 'Carol White',
      status: 'Planning',
      progress: 20,
      dueDate: '2024-10-31',
    },
  ];

  projectColumns: TableColumn<Project>[] = [
    { key: 'name', label: 'Project Name', sortable: true },
    { key: 'owner', label: 'Owner', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'progress', label: 'Progress', sortable: true },
    { key: 'dueDate', label: 'Due Date', sortable: true },
  ];

  ngOnInit(): void {
    console.log('Projects module initialized');
  }
}
