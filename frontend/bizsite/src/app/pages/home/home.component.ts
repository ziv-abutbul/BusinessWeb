import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesService, SiteSettings, GalleryImage, ContentSection } from '../../services/images.service';
import { ContentSectionComponent } from 'src/app/content-section/content-section.component';
import { FeatureGridComponent } from 'src/app/components/feature-grid/feature-grid.component';
import { TestimonialComponent } from 'src/app/components/testimonial/testimonial.component';
import { FeatureItem,FeatureService } from 'src/app/services/feature.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContentSectionComponent , FeatureGridComponent,TestimonialComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hero?: SiteSettings;
  gallery: GalleryImage[] = [];
  looped: GalleryImage[] = [];
  playState: 'running' | 'paused' = 'running';
  sections: ContentSection[] = [];
  features: FeatureItem[] = [];   // 🔹 מוסיפים את זה
  columns: number = 3;

  constructor(private imagesService: ImagesService,private FeatureService: FeatureService) {}

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
    this.FeatureService.getFeatures().subscribe(data => {
      this.features = data;
    });
  }

  

  pause() { this.playState = 'paused'; }
  play() { this.playState = 'running'; }
}
