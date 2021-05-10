import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'aquila-fencer-score',
	templateUrl: './score.component.html',
	styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
	@Input('color') color: 'blue' | 'yellow';
	@Input('position') position: 'left' | 'right';
	@Input('score') score: number;
	@Input('name') name: string;

	constructor() { }

	ngOnInit(): void { }

	// Operations
	add(): void {
		this.score++;
	}

	remove(): void {
		this.score--;
	}
}
