import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
  @Input() author: string = 'שם הלקוח';
  @Input() role: string = 'תפקיד / חברה';
  @Input() text: string = 'חוות דעת לדוגמה על השירות או המוצר שלכם...';
  @Input() image: string = 'assets/default-avatar.png';
}
