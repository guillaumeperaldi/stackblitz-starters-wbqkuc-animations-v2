import 'zone.js/dist/zone';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  bootstrapApplication,
  BrowserModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
    },
    importProvidersFrom(CommonModule, BrowserModule, BrowserAnimationsModule),
  ],
});
