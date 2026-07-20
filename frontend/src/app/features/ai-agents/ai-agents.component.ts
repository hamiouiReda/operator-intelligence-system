import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiAgentsRichComponent } from './ai-agents-rich.component';

@Component({
  selector: 'app-ai-agents',
  standalone: true,
  imports: [CommonModule, AiAgentsRichComponent],
  template: `<app-ai-agents-rich />`,
  styles: [],
})
export class AiAgentsComponent {}
