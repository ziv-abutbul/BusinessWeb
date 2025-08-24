import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ContactService,  } from '../../services/contact.service';
import {FeatureService,FeatureItem} from '../../services/feature.service'
@Component({
  selector: 'app-feature-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-grid.component.html',
  styleUrls: ['./feature-grid.component.scss']
})
export class FeatureGridComponent implements OnInit {
  @Input() features: FeatureItem[] = [];
  @Input() columns: number = 3; // ברירת מחדל 3 עמודות

  constructor(private FeatureService: FeatureService) {}
  ngOnInit() {
    this.FeatureService.getFeatures().subscribe(data => {
      this.features = data;
    });
  }
}
