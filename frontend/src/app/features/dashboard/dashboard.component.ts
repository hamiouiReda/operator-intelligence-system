import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRichComponent } from './dashboard-rich.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardRichComponent],
  template: `<app-dashboard-rich />`,
  styles: [],
})
export class DashboardComponent {}
