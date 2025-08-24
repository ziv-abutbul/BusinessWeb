import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureGridComponent } from './feature-grid.component';

describe('FeatureGridComponent', () => {
  let component: FeatureGridComponent;
  let fixture: ComponentFixture<FeatureGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FeatureGridComponent]
    });
    fixture = TestBed.createComponent(FeatureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
