import { Component, Input, OnInit } from '@angular/core';
import { Fencer } from 'src/models/fencer';

@Component({
	selector: 'aquila-fencer-score',
	templateUrl: './score.component.html',
	styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
	@Input('color') color: 'blue' | 'yellow';
	@Input('position') position: 'left' | 'right';
	@Input('fencer') fencer: Fencer;

	constructor() { }

	ngOnInit(): void { }

	// Operations
	add(): void {
		this.fencer.score++;
	}

	remove(): void {
		this.fencer.score--;
	}
}
