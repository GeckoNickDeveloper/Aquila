import { Component, Input, OnInit } from '@angular/core';
import { Fencer } from 'src/models/fencer';

@Component({
	selector: 'aquila-fencer-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
	@Input('fencer') fencer: Fencer;

	constructor() { }

	ngOnInit(): void { }

	addYCard(): void {
		this.fencer.yCards++;
	}

	removeYCard(): void {
		this.fencer.yCards--;
	}

	addRCard(): void {
		this.fencer.rCards++;
	}

	removeRCard(): void {
		this.fencer.rCards--;
	}
}