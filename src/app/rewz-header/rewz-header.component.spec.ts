import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewzHeaderComponent } from './rewz-header.component';

describe('RewzHeaderComponent', () => {
  let component: RewzHeaderComponent;
  let fixture: ComponentFixture<RewzHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewzHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewzHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
