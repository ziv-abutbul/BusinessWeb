import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesService, SiteSettings, GalleryImage, ContentSection } from '../../services/images.service';
import { ContentSectionComponent } from 'src/app/content-section/content-section.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContentSectionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hero?: SiteSettings;
  gallery: GalleryImage[] = [];
  looped: GalleryImage[] = [];
  playState: 'running' | 'paused' = 'running';
  sections: ContentSection[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService.getHero().subscribe(data => {
      this.hero = data;
    });

    this.imagesService.getGallery().subscribe(data => {
      this.gallery = data;
      this.looped = [...data, ...data]; // לשכפול עבור מרקיז חלק
    });
      this.imagesService.getContentSection().subscribe(data => {
      this.sections = data;
    });

  }

  pause() { this.playState = 'paused'; }
  play() { this.playState = 'running'; }
}
