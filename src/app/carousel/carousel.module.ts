import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';
import { BackgroundComponent } from './background/background.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    BackgroundComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselRoutingModule
  ]
})
export class CarouselModule { }
