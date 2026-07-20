import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Dashboard</h1>
        <p class="subtitle">Welcome back to your operational cockpit</p>
      </div>

      <div class="dashboard-grid">
        <div class="card card-primary">
          <div class="card-header">Mission Status</div>
          <div class="card-content">
            <div class="metric-value">3</div>
            <div class="metric-label">Active Missions</div>
          </div>
        </div>

        <div class="card card-success">
          <div class="card-header">Today's Objectives</div>
          <div class="card-content">
            <div class="metric-value">7/12</div>
            <div class="metric-label">Completed</div>
          </div>
        </div>

        <div class="card card-warning">
          <div class="card-header">Priority Tasks</div>
          <div class="card-content">
            <div class="metric-value">5</div>
            <div class="metric-label">Pending</div>
          </div>
        </div>

        <div class="card card-danger">
          <div class="card-header">Risk Level</div>
          <div class="card-content">
            <div class="metric-value">Medium</div>
            <div class="metric-label">Monitor</div>
          </div>
        </div>
      </div>

      <div class="dashboard-section">
        <h2>Latest Intelligence</h2>
        <div class="placeholder-content">
          <p>Intelligence data will appear here</p>
        </div>
      </div>

      <div class="dashboard-section">
        <h2>Recent Projects</h2>
        <div class="placeholder-content">
          <p>Project data will appear here</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .dashboard-header {
      margin-bottom: 32px;
    }

    .dashboard-header h1 {
      margin: 0 0 8px 0;
      font-size: 32px;
      font-weight: 700;
      color: #F8FAFC;
    }

    .subtitle {
      margin: 0;
      color: #94A3B8;
      font-size: 14px;
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .card {
      background-color: #131A2A;
      border: 1px solid rgba(148, 163, 184, 0.1);
      border-radius: 16px;
      padding: 20px;
      transition: all 0.3s ease;
    }

    .card:hover {
      border-color: rgba(148, 163, 184, 0.2);
      transform: translateY(-2px);
    }

    .card-primary {
      border-left: 4px solid #3B82F6;
    }

    .card-success {
      border-left: 4px solid #22C55E;
    }

    .card-warning {
      border-left: 4px solid #F59E0B;
    }

    .card-danger {
      border-left: 4px solid #EF4444;
    }

    .card-header {
      font-size: 12px;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      font-weight: 600;
    }

    .card-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .metric-value {
      font-size: 28px;
      font-weight: 700;
      color: #F8FAFC;
    }

    .metric-label {
      font-size: 13px;
      color: #94A3B8;
    }

    .dashboard-section {
      margin-bottom: 32px;
    }

    .dashboard-section h2 {
      margin: 0 0 16px 0;
      font-size: 18px;
      font-weight: 600;
      color: #F8FAFC;
    }

    .placeholder-content {
      background-color: #131A2A;
      border: 1px dashed rgba(148, 163, 184, 0.2);
      border-radius: 12px;
      padding: 40px;
      text-align: center;
      color: #94A3B8;
    }
  `],
})
export class DashboardComponent {}
