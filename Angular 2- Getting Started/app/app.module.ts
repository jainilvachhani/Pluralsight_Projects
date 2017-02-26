import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './products/product-list.component';
import { AppComponent }  from './app.component';
import {StarComponent} from './shared/star.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import {ProductModule} from './products/product.module';

import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-detail.component';


@NgModule({
  imports: [ BrowserModule, HttpModule, RouterModule.forRoot([

  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ]),
  ProductModule
  ],
  declarations: [ AppComponent,  WelcomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
