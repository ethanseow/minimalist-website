import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSection5Component } from './hero-section-5.component';

describe('HeroSection5Component', () => {
  let component: HeroSection5Component;
  let fixture: ComponentFixture<HeroSection5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSection5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
