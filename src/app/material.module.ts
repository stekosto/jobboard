import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatCheckbox,
  MatCheckboxModule,
  MatCardModule,
  MatSnackBarModule
  } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule, MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCheckboxModule, MatCardModule, MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCheckboxModule, MatCardModule, MatSnackBarModule
  ]
})
export class MaterialModule { }
 