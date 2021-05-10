import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './cards/cards.component';
import { TimerComponent } from './timer/timer.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ScoreComponent } from './score/score.component';
import { VisualAlertComponent } from './visual-alert/visual-alert.component';
import { FencerComponent } from './fencer/fencer.component';
import { DoublesComponent } from './doubles/doubles.component';
import { MaterialModule } from './material/material.module';

@NgModule({
	declarations: [
		AppComponent,
		CardsComponent,
		TimerComponent,
		ConfirmDialogComponent,
		ScoreComponent,
		VisualAlertComponent,
		FencerComponent,
		DoublesComponent
	],
	imports: [
		BrowserModule,
		NoopAnimationsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
