import { ViewChild } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Match } from 'src/models/match';
import { TimerComponent } from './timer/timer.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Component({
	selector: 'aquila-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	match: Match;
	@ViewChild(TimerComponent) timer: TimerComponent;

	showAlert: boolean;
	signal: any = new Audio('assets/audio/match_end.mp3');
	SIG_DUR: number = 1000; // Duration of audio signal (default 5s)

	constructor(private dialog: MatDialog) { this.match = new Match(); }

	ngOnInit(): void { this.showAlert = false; }

	displayAlert(): void {
		console.error('expired');
		this.signal.play();
		this.showAlert = true;
		
		setTimeout(() => {
			this.signal.pause();
			this.showAlert = false;
		}, this.SIG_DUR);
	}

	reset(): void {
		let dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { message: 'Do you want to reset the match?' } })

		dialogRef.afterClosed().subscribe(
			(res) => {
				if (res) {
					this.match = new Match();

					this.timer.reset();
				}
			}, (err) => { }
		);
	}
}
