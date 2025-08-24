import { Component, Input, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {
  @Input() backgroundImage!: string;
  @Input() floatingImage?: string;
  @Input() title!: string;
  @Input() description!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'visible');
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.el.nativeElement);
  }
}
