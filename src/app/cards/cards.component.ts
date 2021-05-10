import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'aquila-fencer-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
	@Input('red') red: number;
	@Input('yellow') yellow: number;

	constructor() { }

	ngOnInit(): void { }

	addYCard(): void {
		this.yellow++;
	}

	removeYCard(): void {
		this.yellow--;
	}

	addRCard(): void {
		this.red++;
	}

	removeRCard(): void {
		this.red--;
	}
}