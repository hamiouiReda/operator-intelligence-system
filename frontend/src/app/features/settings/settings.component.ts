import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRichComponent } from './settings-rich.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, SettingsRichComponent],
  template: `<app-settings-rich />`,
  styles: [],
})
export class SettingsComponent {}
