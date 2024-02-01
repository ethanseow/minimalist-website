import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css',
})
export class NavbarComponent {
	isHamburgerOpened = '';
	toggleHamburger() {
		this.isHamburgerOpened = this.isHamburgerOpened == '' ? 'is-active' : '';
	}
}
