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
  MatSelectModule
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
    MatFormFieldModule, MatOptionModule, MatSelectModule
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
    MatFormFieldModule, MatOptionModule, MatSelectModule
  ]
})
export class MaterialModule { }
