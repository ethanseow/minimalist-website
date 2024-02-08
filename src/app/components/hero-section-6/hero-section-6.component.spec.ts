import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSection6Component } from './hero-section-6.component';

describe('HeroSection6Component', () => {
  let component: HeroSection6Component;
  let fixture: ComponentFixture<HeroSection6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSection6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
