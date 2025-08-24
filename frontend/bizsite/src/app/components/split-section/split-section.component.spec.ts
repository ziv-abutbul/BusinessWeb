import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitSectionComponent } from './split-section.component';

describe('SplitSectionComponent', () => {
  let component: SplitSectionComponent;
  let fixture: ComponentFixture<SplitSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SplitSectionComponent]
    });
    fixture = TestBed.createComponent(SplitSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
