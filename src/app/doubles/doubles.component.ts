import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/models/match';

@Component({
	selector: 'aquila-doubles',
	templateUrl: './doubles.component.html',
	styleUrls: ['./doubles.component.css']
})
export class DoublesComponent implements OnInit {
	@Input('match') match: Match;

	constructor() { }

	ngOnInit(): void { }

	add(): void {
		this.match.doubles++;
	}

	remove(): void {
		this.match.doubles--;
	}
}
