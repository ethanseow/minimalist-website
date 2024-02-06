import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-detail-tile',
	standalone: true,
	template: `
		<div class="detail-tile">
			<div class="header">
				<img [src]="iconSrc" />
				<h1>{{ header }}</h1>
			</div>
			<p>{{ details }}</p>
			<a>More know this</a>
		</div>
	`,
	styleUrls: ['./detail-tile.component.css'],
})
export class DetailTileComponent {
	@Input() header: string = '';
	@Input() details: string = '';
	@Input() iconSrc: string = '';
}

@Component({
	selector: 'app-hero-section-2',
	standalone: true,
	imports: [DetailTileComponent],
	templateUrl: './hero-section-2.component.html',
	styleUrl: './hero-section-2.component.css',
})
export class HeroSection2Component {}
