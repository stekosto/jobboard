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
  MatCardModule
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
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCheckboxModule, MatCardModule
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
    MatFormFieldModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatCheckboxModule, MatCardModule
  ]
})
export class MaterialModule { }
