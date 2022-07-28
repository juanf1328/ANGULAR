import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  exports:[
    SharedModule
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
