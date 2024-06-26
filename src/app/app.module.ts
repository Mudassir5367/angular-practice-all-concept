import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './Directives/directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingComponent } from './Bindings/binding/binding.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';
import { RemoveDashPipe } from './CustomPipe/remove-dash.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BindingComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    PipesComponent,
    RemoveDashPipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
