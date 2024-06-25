import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './Directives/directives/directives.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './Bindings/binding/binding.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { PipesComponent } from './Pipes/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BindingComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
