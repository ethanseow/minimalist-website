import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-detail-tile',
	standalone: true,
	templateUrl: './detail-tile.component.html',
	styleUrls: ['./detail-tile.component.css'],
})
export class DetailTileComponent {
	@Input() header: string = '';
	@Input() details: string = '';
	@Input() iconSrc: string = '';
}
