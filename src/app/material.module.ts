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
  MatCheckboxModule
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
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCheckboxModule
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
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCheckboxModule
  ]
})
export class MaterialModule { }
