import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeRichComponent } from './knowledge-rich.component';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [CommonModule, KnowledgeRichComponent],
  template: `<app-knowledge-rich />`,
  styles: [],
})
export class KnowledgeComponent {}
