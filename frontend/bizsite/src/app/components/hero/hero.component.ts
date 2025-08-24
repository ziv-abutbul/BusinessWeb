// src/app/components/hero/hero.component.ts
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-HeroSection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroSectionComponent {
  @Input() backgroundImage?: string;
  private _backgroundVideo?: string;

  @Input()
  set backgroundVideo(value: string | undefined) {
    this._backgroundVideo = value;
    this.tryPlayVideo();
  }
  get backgroundVideo(): string | undefined {
    return this._backgroundVideo;
  }

  @Input() headline: string = '';
  @Input() subheadline: string = '';
  @Input() ctaText: string = '';
  @Input() ctaLink: string = '';

  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

  private tryPlayVideo() {
    if (this.videoRef?.nativeElement && this._backgroundVideo) {
      const video = this.videoRef.nativeElement;
      video.play().catch(err => {
        console.log('Hero videoo play error:', err);
      });
    }
  }

  ngAfterViewInit() {
    this.tryPlayVideo(); // מנסה גם אחרי יצירת ה-View
  }
}
