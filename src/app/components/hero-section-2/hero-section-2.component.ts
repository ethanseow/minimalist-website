import { Component, Input } from '@angular/core';
import { DetailTileComponent } from '../detail-tile/detail-tile.component';

@Component({
	selector: 'app-hero-section-2',
	standalone: true,
	imports: [DetailTileComponent],
	templateUrl: './hero-section-2.component.html',
	styleUrl: './hero-section-2.component.css',
})
export class HeroSection2Component {}
