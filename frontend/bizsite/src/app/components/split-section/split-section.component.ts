import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-split-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './split-section.component.html',
  styleUrls: ['./split-section.component.scss']
})
export class SplitSectionComponent {
  @Input() backgroundColor?: string;
  @Input() backgroundImage?: string;
  @Input() headline?: string;
  @Input() description?: string;
  @Input() image?: string;
}
