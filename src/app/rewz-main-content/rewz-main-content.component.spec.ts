import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewzMainContentComponent } from './rewz-main-content.component';

describe('RewzMainContentComponent', () => {
  let component: RewzMainContentComponent;
  let fixture: ComponentFixture<RewzMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewzMainContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewzMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
