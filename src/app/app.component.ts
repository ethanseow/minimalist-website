import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeroSection2Component } from './components/hero-section-2/hero-section-2.component';
import { HeroSection3Component } from './components/hero-section-3/hero-section-3.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		NavbarComponent,
		HeroSectionComponent,
		HeroSection2Component,
		HeroSection3Component,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'minimalist-website';
}
