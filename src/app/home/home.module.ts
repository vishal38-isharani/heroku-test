import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {HomeRouteComponent} from './home-route/home-route.component';

@NgModule({
  declarations: [HomeComponent, HomeRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent,
      children: [
        {path: '', component: HomeRouteComponent},
      ]
    }])
  ]
})
export class HomeModule {
}
