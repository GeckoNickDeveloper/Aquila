import { HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
	selector: 'aquila-timer',
	templateUrl: './timer.component.html',
	styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
	// Events
	@Output() expire: EventEmitter<void> = new EventEmitter<void>();
	
	// Timer config
	timer: number; // Milliseconds of the timer
	remaining: number; // Milliseconds remaining

	paused: boolean;

	// Configurations
	MIN_1: number = 60000;
	MIN_2: number = 120000;
	MIN_3: number = 180000;
	SEC_1: number = 1000;
	SEC_3: number = 3000;
	SEC_5: number = 5000;
	TEST: number = 100;

	SIG_DUR: number = 10000; // Duration of audio signal

	// UI
	minutes: string;
	seconds: string;
	millis: string;

	constructor(private dialog: MatDialog) { }

	ngOnInit(): void {
		this.timer = this.MIN_3;
		this.reset();

		setInterval(() => { this.timerCallback(); }, 100);
	}

	timerCallback(): void {
		if (!this.paused && this.remaining > 0) {
			this.remaining -= 100;
			this.render();
		}

		if (this.minutes === '0' && this.seconds === '00' && this.millis === '0') {
			this.paused = true;

			/*if (!this.audioLock) {
				this.endTimerCallback();
			}*/
		}
	}

	render(): void {
		let minutesTime = Math.floor(this.remaining / this.MIN_1);
		let secondsTime = Math.floor((this.remaining / this.SEC_1) % 60);
		let millisTime = this.remaining % 1000;

		this.minutes = '' + minutesTime;
		this.seconds = '' + ((secondsTime < 10) ? '0' + secondsTime : secondsTime);
		this.millis = '' + (millisTime / 100);
	}

	addTime(millis: number): void {
		this.remaining += millis;
	}

	removeTime(millis: number): void {
		this.remaining -= millis;
	}

	reset(): void {
		this.paused = true;
		this.remaining = this.timer;
		this.render();
	}

	setTimer(timer: number): void {
		const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { message: "Do you want to reset the timer?" } });

		dialogRef.afterClosed().subscribe(
			(res) => {
				if (res) {
					this.timer = timer;
					this.reset();
				}
			}, (err) => { }
		);
	}

	toggle(): void {
		this.paused = !this.paused;
	}

	expireCallback(): void {
		this.expire.emit();
	}

	@HostListener('window:keyup', ['$event'])
	keyToggle(event: KeyboardEvent): void {
		//console.warn("CODE: " + event.keyCode)
		if (event.keyCode === 32)
			this.toggle();
	}
}
