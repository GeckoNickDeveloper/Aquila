import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
	message: string;

	constructor (
		@Inject(MAT_DIALOG_DATA) data: { message: string },
		private dialogRef: MatDialogRef<ConfirmDialogComponent>
	) { this.message = data.message }

	ngOnInit(): void { }
	
	perform(): void {
		this.dialogRef.close(true);
	}

	cancel(): void {
		this.dialogRef.close(false);
	}
}
