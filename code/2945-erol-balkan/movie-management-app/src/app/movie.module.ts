import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule // Add HttpClientModule to imports
  ],
  exports: [
    CommonModule
  ]
})
export class MovieModule { }
