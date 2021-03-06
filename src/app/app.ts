import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*
 * Angular Modules
 */
import { enableProdMode, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// Setup redux with ngrx
import { Store, StoreModule } from '@ngrx/store';
import { reducers, initialState } from './store/index';

/**
 * Import our child components
 */
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './components/app.component';

/**
 * Import material UI Components
 */
//import { MdButtonModule, MdSlideToggleModule } from '@angular/material';

import { routes } from './app.routes';

/**
 * Import the authentication service to be injected into our component
 */
import { Authentication } from './services/authentication';

/*
 * provide('AppStore', { useValue: appStore }),
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        //MdButtonModule,
        //MdSlideToggleModule,
        RouterModule.forRoot(routes, { useHash: true }),
        StoreModule.forRoot(reducers, <any>initialState),
    ],
    providers: [Authentication],
    declarations: [AppComponent, HomeComponent, LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
