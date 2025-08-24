import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { ContentSectionComponent } from './content-section/content-section.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent ,ContactComponent],
  template: `
    <app-navbar />
    <router-outlet />
    `,
    styles: [`
    :host { display:block; }
    `],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bizsite';
}
