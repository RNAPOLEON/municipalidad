import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedVideoComponent } from './fixed-video.component';

describe('FixedVideoComponent', () => {
  let component: FixedVideoComponent;
  let fixture: ComponentFixture<FixedVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FixedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
