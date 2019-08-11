import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { DateAdapter, MAT_DATE_FORMATS, MatNavList, MatSnackBarModule} from '@angular/material';
import { OverlayContainer, FullscreenOverlayContainer } from '@angular/cdk/overlay';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { baseURL } from './shared/baseurl';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { RestangularConfigFactory } from './shared/restconfig';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NoopAnimationsModule,
    CommonModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    FormsModule,
    ReactiveFormsModule,
    MatSortModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  exports: [
    CommonModule, 
  ],
  entryComponents: [
    
  ],
  providers: [
    { provide: 'BaseURL', useValue: baseURL },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
