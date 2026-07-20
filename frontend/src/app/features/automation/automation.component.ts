import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutomationRichComponent } from './automation-rich.component';

@Component({
  selector: 'app-automation',
  standalone: true,
  imports: [CommonModule, AutomationRichComponent],
  template: `<app-automation-rich />`,
  styles: [],
})
export class AutomationComponent {}
