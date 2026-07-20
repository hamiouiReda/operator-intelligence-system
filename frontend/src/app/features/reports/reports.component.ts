import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRichComponent } from './reports-rich.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, ReportsRichComponent],
  template: `<app-reports-rich />`,
  styles: [],
})
export class ReportsComponent {}
