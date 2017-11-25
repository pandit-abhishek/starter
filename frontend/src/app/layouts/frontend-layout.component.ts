import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-frontend',
	templateUrl: './frontend-layout.component.html'
})
export class FrontendLayoutComponent {
	public disabled: boolean = false;
	public status: { isopen: boolean } = {isopen: false};

	public userData: any = {};
}