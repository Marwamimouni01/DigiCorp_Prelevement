import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './resgiter/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MonetiqueComponent } from './monetique/monetique.component';
import { BreadcrumbModule } from 'xng-breadcrumb';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MonetiqueComponent

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BreadcrumbModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
