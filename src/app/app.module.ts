import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ComponentCommunicationComponent,
    ApiCallsComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
