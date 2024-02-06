import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSection4Component } from './hero-section-4.component';

describe('HeroSection4Component', () => {
  let component: HeroSection4Component;
  let fixture: ComponentFixture<HeroSection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
