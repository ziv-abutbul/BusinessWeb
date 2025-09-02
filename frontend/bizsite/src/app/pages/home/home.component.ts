import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesService, SiteSettings, GalleryImage, ContentSection,HeroSection } from '../../services/images.service';
import { ContentSectionComponent } from 'src/app/content-section/content-section.component';
import { FeatureGridComponent } from 'src/app/components/feature-grid/feature-grid.component';
import { TestimonialComponent } from 'src/app/components/testimonial/testimonial.component';
import { FeatureItem,FeatureService } from 'src/app/services/feature.service';
import { HeroSectionComponent } from 'src/app/components/hero/hero.component';
import { SplitSectionComponent } from 'src/app/components/split-section/split-section.component';
import { SplitSection } from '../../services/images.service';
import { ContactService, TeamMember } from 'src/app/services/contact.service';
import { TeamSectionComponent } from 'src/app/components/team-section/team-section.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ContentSectionComponent , FeatureGridComponent,TestimonialComponent,HeroSectionComponent,SplitSectionComponent,TeamSectionComponent],
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
  heroSectoion?: HeroSection;  // 🔹 לא HeroSectionComponent
  featureSections: SplitSection[] = [];
  teamMembers: TeamMember[]=[];

  constructor(private imagesService: ImagesService,private FeatureService: FeatureService, private contactService: ContactService) {}

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
      this.imagesService.getHeroSection().subscribe(data => {
      this.heroSectoion = data;
  });
    this.imagesService.getSections().subscribe({
      next: (data) => {
        this.featureSections = data;
              console.log(this.featureSections); // חשוב לראות ב־console

      },
      error: (err) => {
        console.error('שגיאה בטעינת ה־SplitSections', err);
      }
    });
    //------Team Members -----
        this.contactService.getTeamMembers().subscribe({
      next: (data) => {
        this.teamMembers = data;
        console.log(this.teamMembers); // חשוב לראות ב־console
      },
      error: (err) => {
        console.error('שגיאה בטעינת teamMembers', err);
      }
    });
  }
  

  

  pause() { this.playState = 'paused'; }
  play() { this.playState = 'running'; }
}
