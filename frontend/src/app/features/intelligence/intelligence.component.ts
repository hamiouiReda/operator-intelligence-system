import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntelligenceRichComponent } from './intelligence-rich.component';

@Component({
  selector: 'app-intelligence',
  standalone: true,
  imports: [CommonModule, IntelligenceRichComponent],
  template: `<app-intelligence-rich />`,
  styles: [],
})
export class IntelligenceComponent {}
