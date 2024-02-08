import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeroSection2Component } from './components/hero-section-2/hero-section-2.component';
import { HeroSection3Component } from './components/hero-section-3/hero-section-3.component';
import { HeroSection4Component } from './components/hero-section-4/hero-section-4.component';
import { HeroSection5Component } from './components/hero-section-5/hero-section-5.component';
import { HeroSection6Component } from './components/hero-section-6/hero-section-6.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		NavbarComponent,
		HeroSectionComponent,
		HeroSection2Component,
		HeroSection3Component,
		HeroSection4Component,
		HeroSection5Component,
		HeroSection6Component,
		FooterComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'minimalist-website';
}
