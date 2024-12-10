import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewzFooterComponent } from './rewz-footer.component';

describe('RewzFooterComponent', () => {
  let component: RewzFooterComponent;
  let fixture: ComponentFixture<RewzFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewzFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewzFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
