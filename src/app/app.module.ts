import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CoreModule} from './core/core.module';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CoreModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    LaddaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
