import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // 👈 מוסיפים
import { HeroSectionComponent } from '../components/hero/hero.component';

export interface SiteSettings {
  hero_image: string;
  headline: string;
  subheadline: string;
}

export interface GalleryImage {
  id: number;
  image: string;
  caption?: string;
  order: number;
  is_active: boolean;
}
export interface ContentSection {
  id: number;
  title: string;
  description: string;
  background_image: string;
  floating_image?: string;
  order: number;
}
export interface HeroSection {
  headline: string;
  subheadline: string;
  background_image: string;
  background_video?: string;
  cta_text?: string;
  cta_link?: string;
}
export interface SplitSection {
  id: number;
  background_color?: string;
  background_image?: string;
  headline: string;
  description?: string;
  image?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHero(): Observable<SiteSettings> {
    return this.http.get<SiteSettings>(`${this.apiUrl}/hero/`);
  }

  getGallery(): Observable<GalleryImage[]> {
    return this.http.get<GalleryImage[]>(`${this.apiUrl}/gallery/`);
  }
  getLogo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/logo/`);
  }
  getContentSections(): Observable<ContentSection[]> {
    return this.http.get<ContentSection[]>(`${this.apiUrl}/content-sections/`);
  }
  getContentSection(): Observable<ContentSection[]> {
    return this.http.get<ContentSection[]>(`${this.apiUrl}/sections/`);
  }
  getHeroSection(): Observable<HeroSection> {
    return this.http.get<HeroSection>(`${this.apiUrl}/heroSection/`);
  }

  getSections(): Observable<SplitSection[]> {
    return this.http.get<SplitSection[]>(`${this.apiUrl}/split-sections/`);
  }
  
}
