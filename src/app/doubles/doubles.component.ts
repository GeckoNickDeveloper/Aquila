import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'aquila-doubles',
	templateUrl: './doubles.component.html',
	styleUrls: ['./doubles.component.css']
})
export class DoublesComponent implements OnInit {
	@Input('counter') counter: number;

	constructor() { }

	ngOnInit(): void { }

	add(): void {
		this.counter++;
	}

	remove(): void {
		this.counter--;
	}
}
