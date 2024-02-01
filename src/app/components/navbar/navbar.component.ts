import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.css',
})
export class NavbarComponent {
	hamburgerClass = {
		opened: 'hamburger hamburger--slider is-active',
		closed: 'hamburger hamburger--slider',
	};
	currentHamburgerClass = this.hamburgerClass.closed;
	toggleHamburger() {
		console.log('toggling');
		this.currentHamburgerClass =
			this.currentHamburgerClass == this.hamburgerClass.closed
				? this.hamburgerClass.opened
				: this.hamburgerClass.closed;
	}
}
