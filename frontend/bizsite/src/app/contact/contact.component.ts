// src/app/components/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { ContactService, ContactInfo } from '../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContactInfo().subscribe((data) => {
      if (data.length > 0) {
        console.log('Contact Info:', data);
        this.contactInfo = data[0]; // ניקח את הרשומה הראשונה
      }
    });
  }
}
