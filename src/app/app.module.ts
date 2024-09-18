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
import { ParentComponent } from './components-communication/parent/parent.component';
import { ChildComponent } from './components-communication/child/child.component';
import { AngularMaterialTestingComponent } from './angular-material-testing/angular-material-testing.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {NgFor} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BindingComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    PipesComponent,
    RemoveDashPipe,
    ParentComponent,
    ChildComponent,
    AngularMaterialTestingComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
