import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


interface TeamMember {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
}

@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.scss']
})
export class TeamSectionComponent {
  @Input() members: TeamMember[] = [];
}
