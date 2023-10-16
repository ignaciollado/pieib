import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';

import { I18nModule } from "./i18n/i18n.module";
import { SelectLanguageComponent } from './Components/select-language/select-language.component';
import { SliderHomeComponent } from './Components/slider-home/slider-home.component';
import { CardsListComponent } from './Components/cards-list/cards-list.component';
import { ParagraphHomeComponent } from './Components/paragraph-home/paragraph-home.component';
import { AyudasSubvHomeComponent } from './Components/ayudas-subv-home/ayudas-subv-home.component';
import { TextoImagenHomeComponent } from './Components/texto-imagen-home/texto-imagen-home.component';
import { SliderRedServiciosHomeComponent } from './Components/slider-red-servicios-home/slider-red-servicios-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    SelectLanguageComponent,
    SliderHomeComponent,
    CardsListComponent,
    ParagraphHomeComponent,
    AyudasSubvHomeComponent,
    TextoImagenHomeComponent,
    SliderRedServiciosHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    I18nModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
