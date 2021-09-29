import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ISaludarService, SaludarService } from './saludos.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: ISaludarService,
      useClass: SaludarService,
    },
  ],
  bootstrap: [AppComponent],
  exports: [HttpClientModule],
})
export class AppModule {}
