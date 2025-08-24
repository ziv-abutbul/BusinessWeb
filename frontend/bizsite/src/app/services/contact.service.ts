// src/app/services/contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // 👈 מוסיפים

export interface ContactInfo {
  phone: string;
  email: string;
  facebook?: string;
  whatsapp?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl;
  //private apiUrl = 'http://127.0.0.1:8000/api/contact/';

  constructor(private http: HttpClient) {}

  getContactInfo(): Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(`${this.apiUrl}/contact/`);
  }
}
