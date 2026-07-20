import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRichComponent } from './projects-rich.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectsRichComponent],
  template: `<app-projects-rich />`,
  styles: [],
})
export class ProjectsComponent {}
