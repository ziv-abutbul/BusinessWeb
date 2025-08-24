import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImagesService } from '../../services/images.service';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
standalone: true,
imports: [RouterLink,CommonModule],
})
export class NavbarComponent implements OnInit {
  logoUrl: string | null = null;
  altText: string = '';

  constructor(private ImagesService: ImagesService) {}

  ngOnInit(): void {
    this.ImagesService.getLogo().subscribe({
      next: (res) => {
      this.logoUrl = res.image;  // כי בסריאלייזר קראנו לשדה image
      this.altText = res.alt_text;
      }
    });
  }
}