import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [],
	exports: [
		CommonModule,

		MatDialogModule,
		MatButtonModule
	]
})
export class MaterialModule { }