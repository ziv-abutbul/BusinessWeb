// src/app/services/feature.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // 👈 מוסיפים

export interface FeatureItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  order: number;
  link?: string; // 🔹 אופציונלי

}

@Injectable({ providedIn: 'root' })
export class FeatureService {
  private apiUrl = environment.apiUrl;
  //private apiUrl = 'http://127.0.0.1:8000/api/features/';

  constructor(private http: HttpClient) {}

  getFeatures(): Observable<FeatureItem[]> {
    return this.http.get<FeatureItem[]>(`${this.apiUrl}/features/`);
  }
}
