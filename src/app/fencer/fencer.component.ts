import { Component, Input, OnInit } from '@angular/core';
import { Fencer } from 'src/models/fencer';

@Component({
	selector: 'aquila-fencer',
	templateUrl: './fencer.component.html',
	styleUrls: ['./fencer.component.css']
})
export class FencerComponent implements OnInit {
	@Input('fencer') fencer: Fencer;
	
	@Input('color') fencerColor: 'blue' | 'yellow';
	@Input('align') align: 'left' | 'right';

	constructor() { }

	ngOnInit(): void { }
}
