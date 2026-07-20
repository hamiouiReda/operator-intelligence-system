import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandCenterRichComponent } from './command-center-rich.component';

@Component({
  selector: 'app-command-center',
  standalone: true,
  imports: [CommonModule, CommandCenterRichComponent],
  template: `<app-command-center-rich />`,
  styles: [],
})
export class CommandCenterComponent {}
